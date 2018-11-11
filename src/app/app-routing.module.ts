import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListApplicantsComponent } from './applicants/list-applicants.component';
import { LoginComponent } from './login.component';
import { CreateApplicantComponent } from './applicants/create-applicant.component';

const appRoutes: Routes = [
  { path: 'list', component: ListApplicantsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'create', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
