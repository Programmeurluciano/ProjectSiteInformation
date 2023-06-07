import { Component, OnInit,VERSION } from '@angular/core';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { Employer } from 'src/app/models/employer/employer';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-listeemployer',
  templateUrl: './listeemployer.component.html',
  styleUrls: ['./listeemployer.component.css']
})
export class ListeemployerComponent implements OnInit {
  searchText:String;

  pageOfItems: Array<any>;
  private roles: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showLeaderBoard= false;
  showLeaderADminBoard=false
  showUserOnly=false;

  Employers: Employer=new Employer();
  employe?: Employer[];
  message?:'';

  constructor(private employerService: EmployerService,private userservice:UserService) {
   }

  ngOnInit(): void {
    this.ListEmployer();
    this.Employers;

    this.isLoggedIn = !!this.userservice.getToken();
    if (this.isLoggedIn) {
      const user = sessionStorage.getItem('roles');
      this.roles = user
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showLeaderBoard = this.roles.includes('ROLE_LEADER');
      this.showLeaderADminBoard=this.roles.includes('ROLE_LEADER') || this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROlES_USER');
      }
  }
 
getEmployer(id:any){
  this.employerService.getEmployer(id).subscribe(
    data=>{
      this.Employers=data
      console.log(data);
    },error=>{
      console.log(error);
     
    }
  )
}

  deleteEmployer(ide:any):void{
    this.employerService.DeleteEMployer(ide) .subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }
  onChangePage(pageOfItems:Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
  ListEmployer(){
    this.employerService.getAllEmployer()
    .subscribe(
      data=>{
        this.employe=data;
        console.log(data);
      }
    )
  }

}
