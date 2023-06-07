import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/departement/departement';
import { DepartementService } from 'src/app/services/departement/departement.service';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { Employer } from 'src/app/models/employer/employer';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-departement',
  templateUrl: './detail-departement.component.html',
  styleUrls: ['./detail-departement.component.css']
})
export class DetailDepartementComponent implements OnInit {
  searchText:String;
  pageOfItems: Array<any>;
  departmnt?: Departement[];

  user = new User('','', []);
  registrationForm: FormGroup;
  EmployerForm: FormGroup;
  TransferFomr: FormGroup;

  public imagePath;
  profile;
  imgURL:any;
  event:any;
  message="";
roles: any = [
    {id:'1',name:'user'}, 
    {id:'2',name:'leader'}
]
selectedRoles: string[];

private rolese: string;
  isLoggedIn = false;
  showLeaderADminBoard=false
  
  departements: Departement=new Departement();
  
  employers: Employer=new Employer();
  employe:Employer[];
  
  constructor(private departementService:DepartementService,private employerService:EmployerService,
    private route:ActivatedRoute,private router:Router,private userservice:UserService,private authService: AuthService,
    private formBuilder: FormBuilder,private http: HttpClient) { }

    userName: string;
    userRoles: string;
    isRegistered = false;
  submitted = false;
  errorMessage = '';

  ngOnInit(): void {
    this.userName = sessionStorage.getItem("username");
    this.userRoles = sessionStorage.getItem("roles");

    this.departementService;
    this.employerService;
    this.getDepatemet(this.route.snapshot.params.id);
    this.getEmployerDept(this.route.snapshot.params.id);
    this.DisplayDepartemnt();

    this.isLoggedIn = !!this.userservice.getToken();
    if (this.isLoggedIn) {
      const user = sessionStorage.getItem('roles');
      this.rolese = user
      this.showLeaderADminBoard=this.rolese.includes('ROLE_LEADER') || this.rolese.includes('ROLE_ADMIN');
      }

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

      this.registrationForm = new FormGroup({
        userName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        roles:new FormControl(null,[Validators.required])
    });

    this.TransferFomr = new FormGroup({
      d: new FormControl(null,[Validators.required])
  });
  }


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
  this.pageOfItems=pageOfItems;
}

  onSubmit(){
    this.submitted = true;
    this.user.userName = this.registrationForm.value.userName;
    this.user.password = this.registrationForm.value.password;
    this.user.roles=[this.registrationForm.value.roles];
    
    this.EmployerForm.value.matricule=this.user.userName;
   
    this.EmployerForm.value.departement={"idDe":Number(this.route.snapshot.params.id)}
    this.registerUser()
    

   this.registerEmployer()
   console.log(this.registrationForm);
   console.log(this.EmployerForm);
    //console.log(this.profile);
}

submiton(){
  this.submitted = true
  this.transferEmployer(this.employers.matricule);
  console.log(this.TransferFomr);
}
createRoles(rolesList): FormArray{
  const arr = rolesList.map(role => {
  return new FormControl(role.name)
  });
  return new FormArray(arr);
}

  loggedIn(){
    return this.authService.isLoggedIn()
  }

  
  DisplayDepartemnt(){
    this.departementService.getAllDepartement()
    .subscribe(
      data=>{
        this.departmnt=data;console.log(data);
      })
  }

  getDepatemet(id:number){
    this.departementService.getDepartement(id)
    .subscribe(
      data =>{
        this.departements=data;
        console.log(data)
      },error =>{
        console.log(error);
      }
      );
  }

 

  deleteEmployer(ide:any){
    this.employerService.DeleteEMployer(ide) .subscribe(
      data=>{console.log(data);
      },error=>{
        console.log(error)}
      );;
  }
  getEmployer(id:any){
    this.employerService.getEmployer(id).subscribe(
      data=>{
        this.employers=data
        console.log(data);
      },error=>{
        console.log(error);
       
      }
    )
  }
  getEmployerDept(id:any){
    this.employerService.getEmployerDept(id)
    .subscribe(
      data =>{
        this.employe=data;
        console.log(data)
      },error =>{
        console.log(error);
      }
      );
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
    

  transferEmployer(id:any){
    const formData =new FormData();
    formData.append('d',JSON.stringify(this.TransferFomr.value.d));
      this.employerService.TransferEmployer(id,formData)
      .subscribe(response=>{console.log(response)},
      error =>{console.log(error);})
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