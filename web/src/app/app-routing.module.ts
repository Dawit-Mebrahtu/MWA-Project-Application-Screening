import { AllusersComponent } from './tabular/allusers/allusers.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AdmissionStaffComponentComponent } from './admission-staff-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginComponent },
  { path: 'users', component: AllusersComponent, canActivate: [AuthGuard] },
  { path: 'question', component: QuestionbankComponent, canActivate: [AuthGuard] },
  { path: 'home', component: NavbarComponent },
  {path: 'invite', component: AdmissionStaffComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
