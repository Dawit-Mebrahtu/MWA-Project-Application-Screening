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
  template: ` <script type="text/javascript">
  YUI().use(
       'aui-ace-editor',
   function(Y) {
      new Y.AceEditor(
                {
                  boundingBox: '#myEditor1',
                  mode: "java"
          
               }
                ).render();
               }
              );

</script>

<!-- javascript to the questions 2 -->
<script type="text/javascript">
  YUI().use(
       'aui-ace-editor',
   function(Y) {
      new Y.AceEditor(
                {
                  boundingBox: '#myEditor2',
                  mode: "java"
          
               }
                ).render();
               }
              );

</script>

<!-- javascript to the questions 3 -->
<script type="text/javascript">
  YUI().use(
       'aui-ace-editor',
   function(Y) {
      new Y.AceEditor(
                {
                  boundingBox: '#myEditor3',
                  mode: "html"
          
               }
                ).render();
               }
              );

</script>`,
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  loginForm: FormGroup;
  text:string = "ace text editor";

  constructor() {
  
  }

  ngOnInit() {
  }


  
  myStart(){


  }
  mySubmit() {
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
