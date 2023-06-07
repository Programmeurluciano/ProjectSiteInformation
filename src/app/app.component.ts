import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectSicom';
  userName: string;
  userRoles: string;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.userName = sessionStorage.getItem("username");
    this.userRoles = sessionStorage.getItem("roles");
  }

    getUserName(){
      return sessionStorage.getItem("username");
   }
   onLogOut(){
     this.authService.logout();
   }
 
   islogin(){
     this.authService.isLoggin();
   }

   loggedIn(){
     return this.authService.isLoggedIn()
   }
}
