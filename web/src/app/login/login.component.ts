import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
 import { AuthenticationService } from '../services/authentication.service';
// private authService: AuthService,


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private auth: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [1, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.loginForm.value)
      .subscribe(
        (token) => {
          // this.user.setUser(token['user'])
          // this.token.saveToken(token['idToken']);
          console.log('login successful');
          this.router.navigateByUrl('/home');
        },
        (err) => {
          if (err.status === 400) {
            console.log('login failed');
            alert(err.error.message);
          }
        }
      );
  }
}
