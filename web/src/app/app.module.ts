import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionStaffComponentComponent } from './admission-staff-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    AdmissionStaffComponentComponent, NavbarComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,AgGridModule.withComponents(null),
   
    ,HttpClientModule, ReactiveFormsModule,FormsModule
  ],
  
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
