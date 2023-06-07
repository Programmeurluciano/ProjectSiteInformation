import { Component, OnInit } from '@angular/core';
import { ConsigneMetier } from 'src/app/models/publication/consigne-metier';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { Employer } from 'src/app/models/employer/employer';
import { ImagePub } from 'src/app/models/image/image-pub';
import { Commentairevenement } from 'src/app/models/commentaire/commentairevenement/commentairevenement';
import { DomSanitizer} from '@angular/platform-browser';
import { CommentairevenementService } from 'src/app/services/commentaire/commentairevenement/commentairevenement.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Evenement } from 'src/app/models/publication/evenement/evenement';

@Component({
  selector: 'app-consignemetier',
  templateUrl: './consignemetier.component.html',
  styleUrls: ['./consignemetier.component.css']
})
export class ConsignemetierComponent implements OnInit {
  evenem:Evenement=new Evenement();
  
  userName:String;
  AjoutComsForm:FormGroup;
  submitted=false
  UpdatComsFomr:FormGroup;

  constructor(private evenementService: EvenementService,private sanitizer:DomSanitizer,private formBuilder: FormBuilder,private ComsService: CommentairevenementService) { }
  Consignes: ConsigneMetier=new ConsigneMetier();
  Consign?: ConsigneMetier[];
  message?:'';

  images: ImagePub=new ImagePub();
  imag?:ImagePub[];

  Comments: Commentairevenement=new Commentairevenement();
  Coms?:Commentairevenement[];

  ngOnInit(): void {
    this.AjoutComsForm=this.formBuilder.group({
      commentaire:new FormControl(null,[Validators.required])
    })
    this.UpdatComsFomr=this.formBuilder.group({
      commentaire:new FormControl(null,[Validators.required])
    })

    this.evenem;
    this.images;
    this.Consignes
    this.AllConsigenBydept(sessionStorage.getItem('username'))
    this.Comments;
    this.sanitize
  }

  onSubmit(){
    this.submitted=true
    this.createComment
    console.log(this.AjoutComsForm);
  }

  Submita(){
    this.submitted=true
    this.update(this.Comments.idCo);
    console.log(this.UpdatComsFomr);
  }
  update(id:any){
    const formData=new FormData();
    formData.append('c',JSON.stringify(this.UpdatComsFomr.value));
    this.ComsService.updateCommentaire(formData,id).subscribe(Data=>{
      console.log(Data);
    })
  }

  deleteComm(idco:any): void{
    this.ComsService.deleteComment(idco).subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }

deleteEvent(id:any): void{
  this.evenementService.deleteEvenement(id).subscribe(
    data=>{console.log(data);
    },error=>{
      console.log(error)}
    );
}

getComment(id:any){
  this.ComsService.findbyidComms(id).subscribe(data=>{
  this.Comments=data;
    console.log(data);
  },error =>{
    console.log(error);
  })
}

  getEvent(idE:any){
   this.evenementService.getEvenement(idE).subscribe(data=>{
    this.evenem=data;
      console.log(data);
    },error =>{
      console.log(error);
    })
  }
  createComment(idDe:any){
    this.userName=sessionStorage.getItem("username");
    const formData=new FormData();
    formData.append('c',JSON.stringify(this.AjoutComsForm.value));
    this.ComsService.createCommentaire(formData,this.userName,idDe).subscribe(Data=>{
      console.log(Data);
    })
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  AllConsigenBydept(idEmp:any){
    this.evenementService.getAllConsigneView(idEmp).subscribe(data=>{
      this.Consign=data;console.log(data);
  })}
}
