import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { Employer } from 'src/app/models/employer/employer';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  submitted = false;
  imgURL:any;
  event:any;
  private username:String;
  isLoggedIn = false;
  showuserOnlyBoard = false;
  private user:String;
  page = 4;
  EmployerForm: FormGroup;

  Emploi:Employer=new Employer()

  Employers: Employer=new Employer();
  employe?: Employer[];
  message=""; 
  profile;
  public imagePath;
  constructor(private employerService: EmployerService,private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.getEmployers  
  this.Emploi
  this.Employers;
  this.EmployerForm=this.formBuilder.group({
    nom:new FormControl(null,[Validators.required]),
    prenom:new FormControl(null,[Validators.required]),
    sexe:new FormControl(null,[Validators.required]),
    dateNaissance:new FormControl(null,[Validators.required]),
    departement:new FormControl(null,[Validators.required]),
    fonction:new FormControl(null,[Validators.required]),
    dateEmbauche:new FormControl(null,[Validators.required]),
    horaire:new FormControl(null,[Validators.required]),
    skype:new FormControl(null,[Validators.required]),
    mail:new FormControl(null,[Validators.required]),
    contacte:new FormControl(null,[Validators.required])
  })

    this.getEmployer(this.route.snapshot.params.id);
    const userLog = this.route.snapshot.params.id;
    const userOnline=sessionStorage.getItem('username');

    if (userLog==userOnline) {
      this.showuserOnlyBoard=true;
      }
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  onSubmit(){
    this.submitted = true;
    this.EmployerForm.value.departement={"idDe":this.Employers.idDepart};
    this.EmployerForm.value.sexe=this.Employers.sexe;
    this.updateEmployer(this.route.snapshot.params.id);
    console.log(this.EmployerForm);
  }

  getEmployers(id:any){
    this.employerService.getEmployer(id)
    .subscribe(
      data=>{
        this.Emploi=data;
      },error=>{
        console.log(error);
      }
    )
  }

  getEmployer(id:any){
    this.employerService.getEmployer(id)
    .subscribe(
      data=>{
        this.Employers=data;
      },error=>{
        console.log(error);
      }
    )
  }
  updateEmployer(id:String){
    const formData =new FormData();
    formData.append('e',JSON.stringify(this.EmployerForm.value));
    formData.append('file',this.profile)
    this.employerService.updateEmployer(formData,id).subscribe(
      Data=>{
        console.log(Data);
      });
  }
  onSelectFile(event) {
    if(event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.profile = file;
     // this.f['profile'].setValue(file);
  
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "image seulement";
      return;
    }
  
    var reader = new FileReader();
    
    this.imagePath = file;
    console.log(file);
    //reader.readAsDataURL(this.readFile()); 
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }
}
}