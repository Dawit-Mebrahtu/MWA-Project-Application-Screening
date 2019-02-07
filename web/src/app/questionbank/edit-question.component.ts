import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { DbServiceService } from '../services/db-service.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
})
export class EditQuestionComponent implements OnInit {

  // sent = true;
  myRowData = [];
  // email = new FormControl('', [
  //   Validators.required, Validators.email
  // ])
  // inviteForm: FormGroup = this.builder.group({
  //   email: this.email,

  // });
  public gridOptions: GridOptions;
  constructor(private builder: FormBuilder, private api: DbServiceService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: "Prospective Student Email",
        field: "email",

      },
      {
        headerName: "Initation Status",
        field: "status",

      },

    ];
    this.gridOptions.rowData = this.myRowData;
  }
  // onFormSubmit(form: FormGroup) {
  //   for (let i in this.myRowData) {
  //     if (this.myRowData[i].email == this.email.value) {
  //       this.sent = false;
  //       return;
  //     }
  //   }
  //   var data = { 'email': this.email.value, 'status': 'SENT' };
  //   const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  //   this.api.postInvites(JSON.stringify(data))
  //     .subscribe(res => {
       
  //     }, (err) => {
  //       console.log(err);
  //     })
  //     this.ngOnInit();
  // }


  
  ngOnInit() {
    this.myRowData =[];
    this.api.getInvites().subscribe(res => {
      for (let i in res) {
        this.myRowData.push({ 'email': res[i].email, 'status': res[i].status });
      }
      this.gridOptions.api.setRowData(this.myRowData);
    }, err => {
      console.log(err);
    });
  }


}
