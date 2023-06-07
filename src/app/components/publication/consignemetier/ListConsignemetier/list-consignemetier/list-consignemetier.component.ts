import { Component, OnInit } from '@angular/core';
import { ConsigneMetier } from 'src/app/models/publication/consigne-metier';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { Employer } from 'src/app/models/employer/employer';
import { map } from 'rxjs-compat/operator/map';
import { Evenement } from 'src/app/models/publication/evenement/evenement';

@Component({
  selector: 'app-list-consignemetier',
  templateUrl: './list-consignemetier.component.html',
  styleUrls: ['./list-consignemetier.component.css']
})

export class ListConsignemetierComponent implements OnInit {
  Consignes: ConsigneMetier=new ConsigneMetier();
  Consign?: ConsigneMetier[];
  message?:'';
  evenem:Evenement=new Evenement();

  Employers: Employer=new Employer();
  employe?: Employer[];

  constructor(private evenementService: EvenementService,private employerService: EmployerService) { }

  ngOnInit(): void {
    this.evenem;
    this.Employers
    this.Consignes
    this.getEmployer(sessionStorage.getItem('username'))
    this.AllConsigenBydept(sessionStorage.getItem('username'))
   }
   deleteEvent(id:any): void{
    this.evenementService.deleteEvenement(id).subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }
  
    getEvent(idE:any){
     this.evenementService.getEvenement(idE).subscribe(data=>{
      this.evenem=data;
        console.log(data);
      },error =>{
        console.log(error);
      })
    }
  getEmployer(id:any){
    this.employerService.getEmployer(id)
    .subscribe(
      data=>{
        this.Employers=data;
        console.log(data);
      },error=>{
        console.log(error);
      }
    )
  }
  
    AllConsigenBydept(idEmp:any){
    this.evenementService.getAllConsigne(idEmp).subscribe(data=>{
      this.Consign=data;console.log(data);
  })}
}
