import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GridOptions } from 'ag-grid-community';
import { DbServiceService } from './services/db-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admission-staff-component',
  template: `
  <div style ="padding-left: 100px;">
    <form id="invitation" [formGroup]="inviteForm" (ngSubmit)="onFormSubmit()">
    <label for="username">Prospective Student Email</label><br>
      <input type ="text" name="email" [formControl]="email" >
      <div [hidden]="email.valid || email.untouched">
      <div>
       Invalid Email
      </div>

      <div [hidden]="!email.hasError('email')">
        The email address format is not correct
      </div>
      </div><br>
      <span *ngIf="sent == false">Email already sent to that address.</span>
      <button type="submit" [disabled]="!email.valid"> Send Invitation</button>
      </form><br>

      <ag-grid-angular #agGrid [gridOptions]="gridOptions"
    style="width: 400px; height: 300px;" 
    class="ag-theme-balham">
</ag-grid-angular>
</div>
  `,
  styles: []
})
export class AdmissionStaffComponentComponent implements OnInit {
  sent = true;
  myRowData = [];
  email = new FormControl('', [
    Validators.required, Validators.email
  ])
  inviteForm: FormGroup = this.builder.group({
    email: this.email,

  });
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
  onFormSubmit(form: FormGroup) {
    for (let i in this.myRowData) {
      if (this.myRowData[i].email == this.email.value) {
        this.sent = false;
        return;
      }
    }
    var data = { 'email': this.email.value, 'status': 'SENT' };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    this.api.postInvites(JSON.stringify(data))
      .subscribe(res => {
       
      }, (err) => {
        console.log(err);
      })
      this.ngOnInit();
  }


  
  ngOnInit() {
    this.api.getInvites().subscribe(res => {
      console.log(res);
      console.log(this.myRowData);
      for (let i in res) {
        this.myRowData.push({ 'email': res[i].email, 'status': res[i].status });
      }
      this.gridOptions.api.setRowData(this.myRowData);
    }, err => {
      console.log(err);
    });
  }


}
