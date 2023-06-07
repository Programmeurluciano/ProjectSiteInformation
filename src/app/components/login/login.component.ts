import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
  });
  }
  submitted = false;
  errorMessage = '';
  isLoggedin = false;
  isLoginFailed = false;

  onSubmit(){
      this.submitted = true;
      this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
          data=>{
              this.isLoggedin = true
              
              this.router.navigate(['/sidebar']);
          },
          error=>{
              console.log(error);
              this.errorMessage = error;
              this.isLoggedin = false;
              this.isLoginFailed = true;
          }
      );
  }
}
