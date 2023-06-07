import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement/departement';
import { DepartementService } from 'src/app/services/departement/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-departement',
  templateUrl: './creation-departement.component.html',
  styleUrls: ['./creation-departement.component.css']
})
export class CreationDepartementComponent implements OnInit {

  departement: Departement=new Departement();

  submitted=false;
  constructor(private departementService:DepartementService,private router: Router) { }

  ngOnInit(): void {

   
  }

  saveDepartement(): void{
    const data = {
      dateCreation:this.departement.dateCreation,
      activite:this.departement.activite,
      horairedept:this.departement.horairedept,
      nomDepartement:this.departement.nomDepartement
    };
    this.departementService.createDepartement(data)
    .subscribe(response => 
      {console.log(response); this.submitted=true},error => console.log(error));  
      console.log(data);
      this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/sidebar/departement']);
    }); 
      //this.router.navigate(['/sidebar/departement']);
    }

    newDepartement(): void{
      this.submitted=false;
      this.departement = new Departement();
    }

    isLogged(){
    const user=sessionStorage.getItem('roles')
    }
}
