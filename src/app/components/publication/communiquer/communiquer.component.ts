import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event/event';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { ImagePub } from 'src/app/models/image/image-pub';
import { Evenement } from 'src/app/models/publication/evenement/evenement';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-communiquer',
  templateUrl: './communiquer.component.html',
  styleUrls: ['./communiquer.component.css']
})
export class CommuniquerComponent implements OnInit {
  evenem:Evenement=new Evenement();

  constructor(private evenementService: EvenementService,private sanitizer:DomSanitizer,private route:ActivatedRoute,private router:Router,private userservice:UserService) { }
  evenements: Event=new Event();
  evenmnt?: Event[];
  message?:'';

  images: ImagePub=new ImagePub();
  imag?:ImagePub[];

  private roles: string;
  isLoggedIn = false;

  showAdminBoard = false;

  ngOnInit(): void {
    this.evenem;
    this.images;
    this.evenements;
    this.AllEventByType("Communiquer");
    this.sanitize
  }

  AllEventByType(type:any){
    this.evenementService.getEventByTypeAll(type).subscribe(data=>{
      this.evenmnt=data;console.log(data);
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

  deleteEvent(id:any): void{
    this.evenementService.deleteEvenement(id).subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );
  }
  
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
