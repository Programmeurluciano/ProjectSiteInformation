import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Departement } from 'src/app/models/departement/departement'; 
import { DepartementService } from 'src/app/services/departement/departement.service';
import { UserService } from 'src/app/services/user/user.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  searchText:String;
  pageOfItems: Array<any>;

  submitted = false
  private roles: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showLeaderBoard= false;
  showLeaderADminBoard=false
  showUserOnly=false;
  idDepts:any;


  deptlist:any[]=[]
  departements: Departement=new Departement();
  //dept:Departement=new Departement();
  departmnt?: Departement[];
  departement:[];
  message?:'';
  page = 4;
  closeResult = '';

  updateDepartForm: FormGroup;
  constructor(private modalService: NgbModal,
    private departementService: DepartementService,private userservice:UserService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.updateDepartForm=this.formBuilder.group({
     nomDepartement:new FormControl(null,[Validators.required]),
     dateCreation:new FormControl(null,[Validators.required]),
     horairedept:new FormControl(null,[Validators.required]),
     activite:new FormControl(null,[Validators.required])
   });


     this.DisplayDepartemnt();
     this.departements;
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

  onSubmit(){
    this.submitted = true
    this.UpdateDepartement(this.departements.idDe);
    console.log(this.updateDepartForm)
    console.log(this.departements.idDe)
  }

  UpdateDepartement(ide:any){
    const Data={
      nomDepartement:this.updateDepartForm.value.nomDepartement,
      dateCreation:this.updateDepartForm.value.dateCreation,
      activite:this.updateDepartForm.value.activite,
      horairedept:this.updateDepartForm.value.horairedept,
    }
    this.message='';
    this.departementService.updateDepartement(Data,ide)
    .subscribe(response=>{console.log(response)},
    error =>{console.log(error);})
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

 onChangePage(pageOfItems: Array<any>) {
        // update current page of items
      this.pageOfItems=pageOfItems;
    }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  DisplayDepartemnt(){
    this.departementService.getAllDepartement()
    .subscribe(
      data=>{
        this.departmnt=data;console.log(data);
      })
  }
  clickMethod(name: string) {
    if(confirm("Voulez vous vraiment supprimer ce departement "+name)) {
      console.log("Implement delete functionality here");
    }
  }

updateData(ide:any){
  this.departementService.getDepartement(ide).subscribe(
    data=>{
      this.departements=data
    },
    error=>console.log(error)
  );
}

  deleteDepartement(id:number): void{
    this.departementService.deleteDepartement(id)
    .subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }
}
