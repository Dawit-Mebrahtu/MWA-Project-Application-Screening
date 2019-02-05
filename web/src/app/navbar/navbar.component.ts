import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth: AuthenticationService) { }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  onLogout() {
    this.auth.logOut();
  }

}
