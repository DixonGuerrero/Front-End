import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPersonsComponent } from './screens/dashboard/admin-edit-persons/admin-edit-persons.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
<<<<<<< HEAD
import { DashboardComponent } from './screens/dashboard/dashboard/dashboard.component';
import { HomeAdminComponent } from './screens/dashboard/home-admin/home-admin.component';
import { StatisticsComponent } from './screens/dashboard/statistics/statistics.component';
import { SettingsComponent } from './screens/dashboard/settings/settings.component';
import { AddEditPersonComponent } from './screens/dashboard/add-edit-person/add-edit-person.component';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'homeAdmin', pathMatch: 'full' },
      { path: 'homeAdmin', component: HomeAdminComponent },
      {
        path: 'personEditAdmin',
        component: AdminEditPersonsComponent,
        children: [
          { path: 'person', component: AddEditPersonComponent }
        ]
      },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'settingsAdmin', component: SettingsComponent },
    ],
  },
=======
import { SignUComponent } from './screens/sign-up/sign-u.component';
import { LoginPageComponent } from './screens/login-page/login-page.component';


const routes: Routes = [
  { path: 'admin/edit/person', component:AdminEditPersonsComponent},
  { path: 'homepage', component: HomePageComponent },
  { path: 'signUp', component: SignUComponent },
  { path: 'login', component: LoginPageComponent},
  { path: '', component:HomePageComponent}
>>>>>>> 6c269e909c1a070abc06d57e25101ddef655d750
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
