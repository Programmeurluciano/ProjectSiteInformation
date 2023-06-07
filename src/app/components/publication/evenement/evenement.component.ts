import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { Evenement } from 'src/app/models/publication/evenement/evenement';
import { ImagePub } from 'src/app/models/image/image-pub';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentairevenement } from 'src/app/models/commentaire/commentairevenement/commentairevenement';
import { CommentairevenementService } from 'src/app/services/commentaire/commentairevenement/commentairevenement.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  userName:String;
  AjoutComsForm:FormGroup;
  evenem:Evenement=new Evenement();
   page=4;
   evenements: Evenement=new Evenement();
   evenmnt?: Evenement[];
   message?:'';
   submitted=false
   UpdatComsFomr:FormGroup;
   imagePubs:ImagePub=new ImagePub();
   imgPb?:ImagePub[];

   comments: Commentairevenement=new Commentairevenement();
   comment?: Commentairevenement[];


  constructor(private evenementService: EvenementService,private route:ActivatedRoute,private router:Router
    ,private commentService: CommentairevenementService,private formBuilder: FormBuilder,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.AjoutComsForm=this.formBuilder.group({
      commentaire:new FormControl(null,[Validators.required])
    }) 
    this.UpdatComsFomr=this.formBuilder.group({
      commentaire:new FormControl(null,[Validators.required])
    })

    this.evenem;
    this.evenements;
    this.imagePubs;
    this.comments;
    this.Allimage(this.route.snapshot.params.id);
    this.getEvent(this.route.snapshot.params.id);
    this.allcommentEvent(this.route.snapshot.params.id);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  onSubmit(){
    this.submitted=true
    this.createComment(this.route.snapshot.params.id)
    console.log(this.AjoutComsForm);
  }
  Submita(){
    this.submitted=true
    this.update(this.comments.idCo);
    console.log(this.UpdatComsFomr);
  }

  deleteEvent(id:any): void{
    this.evenementService.deleteEvenement(id).subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }
  
    getEvents(idE:any){
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
    this.commentService.createCommentaire(formData,this.userName,idDe).subscribe(Data=>{
      console.log(Data);
    })
  }

  AllEvent(){
    this.evenementService.getAllEvenemet()
    .subscribe(
      data=>{
        this.evenmnt=data;console.log(data);  
      }
    )
  }

  Allimage(id:number)
  {
    this.evenementService.listImagePub(id).subscribe(data=>{
      this.imgPb=data;console.log(data);
    })
  }

  allcommentEvent(id:number){ 
    this.commentService.findbyEventComment(id).subscribe(data=>{
      this.comment=data;console.log(data);
    })
  }
  deleteComm(idco:any): void{
    this.commentService.deleteComment(idco).subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }
  getComment(id:any){
    this.commentService.findbyidComms(id).subscribe(data=>{
    this.comments=data;
      console.log(data);
    },error =>{
      console.log(error);
    })
  }

  update(id:any){
    const formData=new FormData();
    formData.append('c',JSON.stringify(this.UpdatComsFomr.value));
    this.commentService.updateCommentaire(formData,id).subscribe(Data=>{
      console.log(Data);
    })
  }


deleteComs(id:number){
this.commentService.deleteComment(id).subscribe(
  data=>{console.log(data);
  },error=>{
    console.log(error)}
  );
}
  getEvent(id:number)
  {
    this.evenementService.getEvenement(id).subscribe(data=>{
      this.evenements=data;console.log(data);
    },error =>{
      console.log(error);
    })
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
