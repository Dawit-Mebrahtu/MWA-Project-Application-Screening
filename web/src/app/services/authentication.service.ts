import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) {
    console.log(credentials);
    return this.http.post(environment.SERVER_URL + '/user/signin', credentials);
  }
}
