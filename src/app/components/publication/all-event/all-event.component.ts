import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event/event';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { ImagePub } from 'src/app/models/image/image-pub';
import { Commentairevenement } from 'src/app/models/commentaire/commentairevenement/commentairevenement';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentairevenementService } from 'src/app/services/commentaire/commentairevenement/commentairevenement.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Evenement } from 'src/app/models/publication/evenement/evenement';

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {

  evenem:Evenement=new Evenement();

  userName:String;
  AjoutComsForm:FormGroup;
  UpdatComsFomr:FormGroup;

  constructor(private evenementService: EvenementService,private sanitizer:DomSanitizer,
  private route:ActivatedRoute,private router:Router,private ComsService: CommentairevenementService,private formBuilder: FormBuilder) { }
  evenements: Event=new Event();
  evenmnt?: Event[];
  message?:'';
  submitted=false

  images: ImagePub=new ImagePub();
  imag?:ImagePub[];

   

  comments: Commentairevenement=new Commentairevenement();
  Coms:Commentairevenement[];


  ngOnInit(): void {
    this.AjoutComsForm=this.formBuilder.group({
      commentaire:new FormControl(null,[Validators.required])
    })

    this.UpdatComsFomr=this.formBuilder.group({
      commentaire:new FormControl(null,[Validators.required])
    })

    this.evenem;
    this.images;
    this.evenements;
    this.comments;
    this.AllEventByType("Evenement");
    this.sanitize
  }

  onSubmit(){
    this.submitted=true
    this.createComment
    console.log(this.AjoutComsForm);
    this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/sidebar/allEvent']);
  }); 
  }

  Submita(){
    this.submitted=true
    this.update(this.comments.idCo);
    console.log(this.UpdatComsFomr);
    this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/sidebar/allEvent']);
  }); 
  }

  deleteComm(idco:any): void{
    this.ComsService.deleteComment(idco).subscribe(
      data=>{console.log(data);
        this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/sidebar/allEvent']);
      }); 
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

  getComment(id:any){
    this.ComsService.findbyidComms(id).subscribe(data=>{
    this.comments=data;
      console.log(data);
    },error =>{
      console.log(error);
    })
  }

  update(id:any){
    const formData=new FormData();
    formData.append('c',JSON.stringify(this.UpdatComsFomr.value));
    this.ComsService.updateCommentaire(formData,id).subscribe(Data=>{
      console.log(Data);
    })
  }


deleteComs(id:number){
this.ComsService.deleteComment(id).subscribe(
  data=>{console.log(data);
  },error=>{
    console.log(error)}
  );
}
 
AllEventByType(type:any){
    this.evenementService.getEventByTypeAll(type).subscribe(data=>{
      this.evenmnt=data;console.log(data);
    })
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
