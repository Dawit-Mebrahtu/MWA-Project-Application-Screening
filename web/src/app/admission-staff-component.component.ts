import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-admission-staff-component',
  template: `
  <div style ="padding-left: 100px;">
    <form id="invitation" [formGroup]="inviteForm" (ngSubmit)="onSubmit()">
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
  email = new FormControl('',[
    Validators.required, Validators.email
  ])
  inviteForm: FormGroup = this.builder.group({
    email: this.email,
    
  });
  public gridOptions: GridOptions;
  constructor(private builder: FormBuilder) {
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
  

  onSubmit(){
    for(let i in this.myRowData){
      if(this.myRowData[i].email == this.email.value){
        this.sent = false;
        return;
      }
    }
    this.myRowData.push({'email':this.email.value, 'status':'Invitation Sent'});
    this.gridOptions.api.setRowData(this.myRowData) ;
    console.log(this.myRowData[0].email)
    this.sent = true;
    
  }
  myRowData = [
    {email: 'Kabinad.Melaku@gmail.com', status: 'Invitation Sent'},
    ];
   ngOnInit() {
   
  }

}
