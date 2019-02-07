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
import { AnswerServiceService } from 'src/app/services/answer-service.service';
import { ActivatedRoute } from '@angular/router';
import { decodeme } from '../../../../../decoder.js';

@Component({
  selector: 'app-exam',
  /*template:` <ace-editor
  [(text)]="text" 
   #editor style="height:150px;"></ace-editor>`,*/
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  
  name = [];
  Question1: any;
  Question2: any
  Question3: any
  questions = [];
  id: string;
  pemail;
  ptoken;
  constructor(private api: QuestionServiceService, private answerApi: AnswerServiceService, private route: ActivatedRoute) {
  }
}


// async ngOnInit(){
//   this.loadQuestions();
//   await this.route.paramMap.subscribe(params => {
//    this.pemail = params.params.email;
//    this.ptoken = params.params.token;
   
// })

  

// }
//   async loadQuestions() {
//     await this.api.getQuestions(this.pemail,this.ptoken).subscribe(res => {
//       console.log(res);

//       for (let i in res) {
//         this.questions.push(res[i].question)
//       }
//       this.Question1 = this.questions[0];
//       this.Question2 = this.questions[1];
//       this.Question3 = this.questions[2];

//     }, err => {
//       console.log(err);
//     });
// }
// mySubmit() {

//   var a = (document.getElementById('myEditor1').innerText);
//   var b = (document.getElementById('myEditor2').innerText);
//   var c = (document.getElementById('myEditor3').innerText);
//   var data = { 'question1': this.Question1, 'answer1': a, 'question2': this.Question2, 'answer2': b, 'question3': this.Question3, 'answer3': c };
//   this.answerApi.postAnswers(JSON.stringify(data))
//     .subscribe(res => {

//     }, (err) => {
//       console.log(err);
//     })
// }


//   myStart() {
//     console.log("my start clicked");
//     YUI().use(
//       'aui-ace-editor',
//       function (Y) {
//         new Y.AceEditor(
//           {
//             boundingBox: '#myEditor1',
//             mode: "java",
            

//           }
//         ).render();

//       }
//     );
//     YUI().use(
//       'aui-ace-editor',
//       function (Y) {
//         new Y.AceEditor(
//           {
//             boundingBox: '#myEditor2',
//             mode: "java"

//           }
//         ).render();
//       }
//     );
//     YUI().use(
//       'aui-ace-editor',
//       function (Y) {
//         new Y.AceEditor(
//           {
//             boundingBox: '#myEditor3',
//             mode: "java"

//           }
//         ).render();
//       }
//     );



//   }
  

// }







