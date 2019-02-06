import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { acequire } from 'brace';
import { QuestionServiceService } from 'src/app/services/question-service.service';


@Component({
  selector: 'app-exam',
  /*template:` <ace-editor
  [(text)]="text" 
   #editor style="height:150px;"></ace-editor>`,*/
   templateUrl:'./exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  constructor(private api: QuestionServiceService){}
 
  ngOnInit() {
    this.api.getQuestions().subscribe(res => {
      console.log(res);
      
      for (let i in res) {
        console.log(res);
      }
      
    }, err => {
      console.log(err);
    });
  }
}
 
 
 
 
 
 
  /*@ViewChild('editor') editor;
  loginForm: FormGroup;
  text:string = "";
  options:any = {maxLines: 1000, printMargin: false};
    
    onChange(code) {
        console.log("new code", code);
    }

  constructor() {
   
  }
  ngAfterViewInit() {
    this.editor.setTheme("eclipse");
    this.editor.setMode('Java');

    this.editor.getEditor().setOptions({
        enableBasicAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
        name: "showOtherCompletions",
        bindKey: "Ctrl-.",
        exec: function (editor) {

        }
    })
}
  


  ngOnInit() {
    
//this.myStart();

  }
  
  myStart(){
    console.log("my start clicked");
    YUI().use(
      'aui-ace-editor',
  function(Y) { ace.edit(
     new Y.AceEditor(
               {
                 boundingBox: '#myEditor1',
                 mode: "java"
         
              }
               )).render();
              }
             );
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
}*/
