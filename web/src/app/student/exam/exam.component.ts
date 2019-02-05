import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  loginForm: FormGroup;
  text:string = "ace text editor";

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [1, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
   // const login = { email: this.loginForm.value.email, password: this.loginForm.value.password };
    // this.authService
    //   .login(login)
    //   .subscribe(
    //     response => {
    //       //localStorage.setItem('_token',response);
    //       console.log(response);
    //     },
    //     error => {
    //       return console.log(error);
    //     }
    //   );
  }
}
