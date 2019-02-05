import { NavbarComponent } from './navbar/navbar.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionStaffComponentComponent } from './admission-staff-component.component';

const routes: Routes = [
  { path: 'home', component: NavbarComponent },
  {path: 'invite', component: AdmissionStaffComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
