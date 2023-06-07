import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { Evenement } from 'src/app/models/publication/evenement/evenement';
import { ImagePub } from 'src/app/models/image/image-pub';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  styleUrls: ['./liste-evenement.component.css']
})
export class ListeEvenementComponent implements OnInit {

  evenem:Evenement=new Evenement();
  evenements: Evenement=new Evenement();
   evenmnt?: Evenement[];
   message?:'';

   imagePubs:ImagePub=new ImagePub();
   imgPb?:ImagePub[];
  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    //this.AllEvent();
    this.evenem;
    this.evenements;
    this.imagePubs;
    this.AllimageByType("Evenement");
  }

  getEvent(idE:any){
    this.evenementService.getEvenement(idE).subscribe(data=>{
     this.evenem=data;
       console.log(data);
     },error =>{
       console.log(error);
     })
   }

  deleteEvent(id:any): void{
    this.evenementService.deleteEvenement(id).subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }

  deleteComm(idEv:any){
    this.evenementService.deleteEVent(idEv) .subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }
  AllEvent(){
    this.evenementService.getAllEvenemet()
    .subscribe(
      data=>{
        this.evenmnt=data;console.log(data);  
      }
    )
  }

AllimageByType(type:any){
  this.evenementService.getEventByTYpe(type).subscribe(data=>{
    this.evenmnt=data;console.log(data);
  })
}

  Allimage(id:number)
  {
    this.evenementService.listImagePub(id).subscribe(data=>{
      this.imgPb=data;console.log(data);
    })
  }
}
