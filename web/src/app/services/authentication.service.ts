import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as decode from 'jwt-decode';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router,  private token: TokenService, private user: UserService) { }

  login(credentials) {
    console.log(credentials);
    return this.http.post(environment.SERVER_URL + '/user/signin', credentials);
  }

  signup(credentials) {
    return this.http.post(environment.SERVER_URL + '/user/signup', credentials);
  }

  validate(email) {
    return this.http.post(environment.SERVER_URL + '/user/validateEmail', { email: email });
  }

  logOut() {
    this.user.setUser(null);
    this.token.deleteToken();
    this.router.navigate(['/signin']);
  }

  isLoggedIn() {
    const userPayload = this.token.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  getUser() {
      const decoded = decode(this.token.getToken());
      const email = decoded.sub;
      const user = this.http.get('/api/user/profile?email=' + email);
      this.user.setUser(user);
      return user;
  }

}
