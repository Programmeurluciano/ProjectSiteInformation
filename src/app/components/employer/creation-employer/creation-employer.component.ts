import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { DepartementService } from 'src/app/services/departement/departement.service';
import { Departement } from 'src/app/models/departement/departement';
import { HttpClient } from '@angular/common/http';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-employer',
  templateUrl: './creation-employer.component.html',
  styleUrls: ['./creation-employer.component.css']
})
export class CreationEmployerComponent implements OnInit {
  departements: Departement=new Departement();
  departmnt?: Departement[];
  registrationForm: FormGroup;
  EmployerForm: FormGroup;
  user = new User('','', []);
  message="";
  public imagePath;
  isRegistered = false;
  submitted = false;
  errorMessage = '';
  profile;
  imgURL:any;
  event:any;
  roles: any = [
      {id:'1',name:'user'}, 
      {id:'2',name:'admin'},
      {id:'3',name:'leader'}
  ]
  rolex: any = [
    {id:'1',name:'Utilisateur'}, 
    {id:'2',name:'Administrateur'},
    {id:'3',name:'Leadeur'}
]
  selectedRoles: string[];

  constructor(private http: HttpClient,
    private authService: AuthService,private employerService: EmployerService,
    private departementService: DepartementService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
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
      contacte:new FormControl(null,[Validators.required]),
      matricule:new FormControl(null,[Validators.required])
    })

    this.DisplayDepartemnt();
    this.departements;
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      roles:new FormControl(null,[Validators.required])
  });

  }

createRoles(rolesList): FormArray{
    const arr = rolesList.map(role => {
    return new FormControl(role.name)
    });
    return new FormArray(arr);
}

onSubmit(){
    this.submitted = true;
    this.user.userName = this.registrationForm.value.userName;
    this.user.password = this.registrationForm.value.password;
    this.user.roles=[this.registrationForm.value.roles];
    
    this.EmployerForm.value.matricule=this.user.userName;
    this.EmployerForm.get('departement').valueChanges.subscribe(f => {
      this.onCountryChanged(f);
    })
   
    this.EmployerForm.value.departement={"idDe":this.EmployerForm.value.departement}
    this.registerUser()
    

   this.registerEmployer()
   console.log(this.registrationForm);
   console.log(this.EmployerForm);
    //console.log(this.profile);
    this.router.navigateByUrl('/sidebar/listeEmployer', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/sidebar/listeEmployer']);
  }); 
}

onCountryChanged(value) {
  console.log('onCountryChanged')
  console.log(value)
}
registerEmployer(){
  const formData =new FormData();
  formData.append('employer',JSON.stringify(this.EmployerForm.value));
  formData.append('file',this.profile)
  this.employerService.createEmployer(formData).subscribe(
    Data=>{
      console.log(Data);
    });
  }


registerUser(){
    this.authService.signup(this.user)
    .subscribe(user=> {
        console.log(user);
        this.isRegistered = true;
    }, error=> {
        console.log(error);
        this.errorMessage = error;
        this.isRegistered = false;
    });
}

  DisplayDepartemnt(){
    this.departementService.getAllDepartement()
    .subscribe(
      data=>{
        this.departmnt=data;console.log(data);
      })
  }

readFile():any{
  this.http.get('/assets/ImgV/PngItem_1051661.png', { responseType: 'blob' })
  .subscribe(res => {
    const reader = new FileReader();
    reader.onloadend = () => {
      var base64data = reader.result;                
          console.log(base64data);
    }
    reader.readAsDataURL(res);
    return res; 
    //console.log(res);
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

