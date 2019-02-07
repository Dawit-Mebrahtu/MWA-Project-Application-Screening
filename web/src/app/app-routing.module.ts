
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
import { EditUserComponent } from './signup/edit-user.component';
import { EditQuestionComponent } from './questionbank/edit-question.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginComponent },
  { path: 'edituser', component: EditUserComponent,  canActivate: [AuthGuard] },
  { path: 'users', component: AllusersComponent, canActivate: [AuthGuard] },
  { path: 'question', component: QuestionbankComponent, canActivate: [AuthGuard] },
  { path: 'editquestion', component: EditQuestionComponent, canActivate: [AuthGuard] },
  { path: 'home', component: NavbarComponent },
  {path: 'invite', component: AdmissionStaffComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
