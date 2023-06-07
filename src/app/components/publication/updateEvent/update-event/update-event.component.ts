import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { Evenement } from 'src/app/models/publication/evenement/evenement';
import { ImagePub } from 'src/app/models/image/image-pub';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators,FormsModule  } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  div1:boolean=true;
  div2:boolean=false;
  PhotoEvent:FileList;
  updateEvent:FormGroup;
  updateEventNorm:FormGroup 

  url: any; //Angular 11, for stricter type
  msg = "";
  evenements: Evenement=new Evenement();
   evenmnt?: Evenement[];
   message?:'';
   submitted=false

   imagePubs:ImagePub=new ImagePub();
   imgPb?:ImagePub[];

  constructor(private evenementService: EvenementService,private route:ActivatedRoute,private router:Router
    ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
 this.updateEvent=this.formBuilder.group({
  event:new FormControl(null,[Validators.required])
})

this.updateEventNorm=this.formBuilder.group({
  event:new FormControl(null,[Validators.required])
})
    this.imgPb
    this.imagePubs
    this.evenements;
    this.Allimage(this.route.snapshot.params.id);
    this.getEvent(this.route.snapshot.params.id);
  }


  onSubmit(){
    this.submitted=true
    this.updateEventes(this.route.snapshot.params.id);
    //console.log(this.AjouEventForm);
    //console.log(this.PhotoEvent);
    this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/sidebar/Evenement/'+this.route.snapshot.params.id]);
  }); 
  }

  onSubmitB(){
    this.submitted=true
    this.updatEventNorm(this.route.snapshot.params.id);
    this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/sidebar/Evenement/'+this.route.snapshot.params.id]);
  }); 
  }
 


  div1Fonction(){
    this.div1=false;
    this.div2=true;
  }
  
  div2Fonction(){
    this.div1=true;
    this.div2=false;
  }
  
updatEventNorm(idEv:any){
  const formData=new FormData();
  formData.append('e',JSON.stringify(this.updateEventNorm.value));
  this.evenementService.updateEvenementNorm(formData,idEv).subscribe(
    Data=>{
      console.log(Data);
    }
  )
}

updateEventes(idEv:any){
  const formData=new FormData();
  formData.append('e',JSON.stringify(this.updateEvent.value));
  for (let i = 0;i<=this.PhotoEvent.length; i++){
    formData.append('file',this.PhotoEvent[i]);
    }
  this.evenementService.updateEvenement(formData,idEv).subscribe(
    Data=>{
      console.log(Data);
    }
  )
}

  Allimage(id:number)
  {
    this.evenementService.listImagePub(id).subscribe(data=>{
      this.imgPb=data;console.log(data);
    })
  }

  getEvent(id:number)
  {
    this.evenementService.getEvenement(id).subscribe(data=>{
      this.evenements=data;console.log(data);
    },error =>{
      console.log(error);
    })
  }

  //selectFile(event) { //Angular 8
selectedFiles?:FileList;
previews: string[] = [];
selectFile(event: any) { //Angular 11, for stricter type
  this.PhotoEvent=event.target.files;
  this.selectedFiles=event.target.files;
  this.previews=[];
  if(this.selectedFiles && this.selectedFiles[0]) {
    const numberFile=this.selectedFiles.length;
    for(let i=0;i<numberFile;i++){
    
    const reader = new FileReader();
    
    this.msg = 'vous devez choisir une image';
    reader.onload = (e: any) => {
    this.msg = "";
    this.url = reader.result; 
    this.previews.push(e.target.result);
   
  };
  reader.readAsDataURL(this.selectedFiles[i]);
 
    }
  }
  
  var mimeType = event.target.files[0].type;
  
  if (mimeType.match(/image\/*/) == null) {
    this.msg = "le type du fichier n'est pas une image";
    return;
  }
  
}
}