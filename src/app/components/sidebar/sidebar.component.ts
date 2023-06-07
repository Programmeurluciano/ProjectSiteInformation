import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { Employer } from 'src/app/models/employer/employer';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { Evenement } from 'src/app/models/publication/evenement/evenement';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   
 
  private roles: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showLeaderBoard= false;
  showLeaderADminBoard=false
  showUserOnly=false;


  Evenements:Evenement=new Evenement();
  Events?:Evenement[];
  Evnt?:Evenement[]

  Employers: Employer=new Employer();
  employe?: Employer[];
  message?:'';
  Evenement?:'Evenement';
  compteConsigne?:any;
  compteEvent?:any;
  compteCommu?:any; 
  compteTotal?:any;


  userName: string;
  userRoles: string;
  constructor(private authService: AuthService,
    private employerService: EmployerService,private userservice:UserService,private router: Router,
    private evenementService:EvenementService) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem("username");
    this.userRoles = sessionStorage.getItem("roles");
    this.getEmployerse(this.userName);
    this.Evenement =this.Evenement;
    this.getNotifEvent()
    this.getNotifCommu();
    this.getNumberCommu();
    this.getNumberEvent();
    this.compteConsigne;
    this.compteCommu;
    this.compteEvent;
    this.compteTotal=this.compteCommu+this.compteEvent;
     this.getNumberConsigne( this.userName );

    this.isLoggedIn = !!this.userservice.getToken();
    if (this.isLoggedIn) {
      const user = sessionStorage.getItem('roles');
      this.roles = user
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showLeaderBoard = this.roles.includes('ROLE_LEADER');
      this.showLeaderADminBoard=this.roles.includes('ROLE_LEADER') || this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROlES_USER');
      }
      if(!this.loggedIn()){
      this.authService.logout();
      this.router.navigate(['/login'])
      }
  }

  getUserName(){
     return sessionStorage.getItem("username");
  }

  onLogOut(){
    this.authService.logout();
  }

  loggedIn(){
    return this.authService.isLoggedIn()
  }

  getEmployerse(id:any){
    this.employerService.getEmployer(id)
    .subscribe(
      data=>{
        this.Employers=data;
      },error=>{
        console.log(error);
      }
    )
  }

  getNotifEvent(){
    this.evenementService.getEventByTYpe("Evenement").subscribe(
      data=>{
        this.Events=data;
      },error=>{
        console.log(error);
      }
    )
  }

  getNotifCommu(){
    this.evenementService.getEventByTYpe("Communiquer").subscribe(
      data=>{
        this.Evnt=data;
      },error=>{
        console.log(error);
      }
    )
  }

  getNumberEvent(){
   this.evenementService.nombreEVent("Evenement").subscribe(
    data=>{
      this.compteEvent=data;
    },error=>{
      console.log(error);
    }
  );;
  }
  
  getNumberCommu(){
    this.evenementService.nombreEVent("Communiquer").subscribe(
      data=>{
        this.compteCommu=data;
      },error=>{
        console.log(error);
      }
    );;
   }

  getNumberConsigne(idEmp:any){
    this.evenementService.nombreConsigen(idEmp).subscribe(
      data=>{
        this.compteConsigne=data;
      },error=>{
        console.log(error);
      }
    );
  }

}
