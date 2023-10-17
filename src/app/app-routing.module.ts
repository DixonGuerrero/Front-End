import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPersonsComponent } from './screens/admin-edit-persons/admin-edit-persons.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { SignUComponent } from './screens/sign-up/sign-u.component';
import { LoginPageComponent } from './screens/login-page/login-page.component';


const routes: Routes = [
  { path: 'admin/edit/person', component:AdminEditPersonsComponent},
  { path: 'homepage', component: HomePageComponent },
  { path: 'signUp', component: SignUComponent },
  { path: 'login', component: LoginPageComponent},
  { path: '', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
