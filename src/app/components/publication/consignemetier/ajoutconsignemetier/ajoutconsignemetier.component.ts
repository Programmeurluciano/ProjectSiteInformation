import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/services/publication/evenement/evenement.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutconsignemetier',
  templateUrl: './ajoutconsignemetier.component.html',
  styleUrls: ['./ajoutconsignemetier.component.css']
})
export class AjoutconsignemetierComponent implements OnInit {
  div1:boolean=true;
  div2:boolean=false;
  PhotoEvent:FileList;
  userName: string;
  AjouConsigneForm:FormGroup;
  AjouConsigneFormNorm:FormGroup;
  submitted = false;

  constructor(private evenementService: EvenementService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.AjouConsigneForm=this.formBuilder.group({
      event:new FormControl(null,[Validators.required])
    })

    this.AjouConsigneFormNorm=this.formBuilder.group({
      event:new FormControl(null,[Validators.required])
    })
  }

  onSubmit(){
    this.submitted=true
    this.CreateConsigne();
    //console.log(this.AjouEventForm);
    //console.log(this.PhotoEvent);
    this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/sidebar/ConsigneMetier']);
  }); 
  }

  onSubmitB(){
    this.submitted=true
    this.CreateConsigneNormal();
    this.router.navigateByUrl('/sidebar', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/sidebar/ConsigneMetier']);
  }); 
  }
  selectedFiles?:FileList;
  previews: string[] = [];
//url; //Angular 8
url: any; //Angular 11, for stricter type
msg = "";

div1Fonction(){
  this.div1=false;
  this.div2=true;
}

div2Fonction(){
  this.div1=true;
  this.div2=false;
}

CreateConsigne(){
  this.userName=sessionStorage.getItem("username");
  const formData=new FormData();
  formData.append('e',JSON.stringify(this.AjouConsigneForm.value));
  for (let i = 0;i<=this.PhotoEvent.length; i++){
  formData.append('file',this.PhotoEvent[i]);
  }
  this.evenementService.createConsigneMetier(formData,this.userName).subscribe(
    Data=>{
      console.log(Data);
    }
  )
}

CreateConsigneNormal(){
  this.userName=sessionStorage.getItem("username");
  const formData=new FormData();
  formData.append('e',JSON.stringify(this.AjouConsigneFormNorm.value));
  this.evenementService.creatConsigneNorm(formData,this.userName).subscribe(
    Data=>{
      console.log(Data);
    }
  )
}
//selectFile(event) { //Angular 8
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
  
 /*var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  
  reader.onload = (_event) => {
    this.msg = "";
    this.url = reader.result; 
  }*/

}
}
