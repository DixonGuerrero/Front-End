import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPersonsComponent } from './screens/dashboard/admin-edit-persons/admin-edit-persons.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { DashboardComponent }  from './screens/dashboard/dashboard/dashboard.component';
import { HomeAdminComponent } from './screens/dashboard/home-admin/home-admin.component';
import { StatisticsComponent } from './screens/dashboard/statistics/statistics.component';
import { SettingsComponent } from './screens/dashboard/settings/settings.component';
import { AddEditPersonComponent } from './screens/dashboard/add-edit-person/add-edit-person.component';
import { LoginPageComponent } from './screens/login-page/login-page.component';
import { SignUComponent } from './screens/sign-up/sign-u.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'edit/:id', component: AddEditPersonComponent },
      { path: 'add/person', component: AddEditPersonComponent },
      { path: '', redirectTo: 'homeAdmin', pathMatch: 'full' },
      { path: 'homeAdmin', component: HomeAdminComponent },
      { path: 'personEditAdmin',component: AdminEditPersonsComponent},
      { path: 'statistics', component: StatisticsComponent },
      { path: 'settingsAdmin', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
