import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { MovieDetailsComponent } from './screens/movie-details/movie-details.component';
import { EditProfileComponent } from './screens/edit-profile/edit-profile.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { SignUComponent } from './screens/sign-up/sign-u.component';
import { AdminEditPersonsComponent } from './screens/dashboard/admin-edit-persons/admin-edit-persons.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BodyComponent } from './screens/dashboard/body/body.component';
import { SidenavComponent } from './screens/dashboard/sidenav/sidenav.component';
import { StatisticsComponent } from './screens/dashboard/statistics/statistics.component';
import { SettingsComponent } from './screens/dashboard/settings/settings.component';
import { DashboardComponent } from './screens/dashboard/dashboard/dashboard.component';
import { HomeAdminComponent } from './screens/dashboard/home-admin/home-admin.component';
import { AddEditPersonComponent } from './screens/dashboard/add-edit-person/add-edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieDetailsComponent,
    EditProfileComponent,
    FavoritesComponent,
    SignUComponent,
    AdminEditPersonsComponent,
    NavBarComponent,
    BodyComponent,
    SidenavComponent,
    StatisticsComponent,
    SettingsComponent,
    DashboardComponent,
    HomeAdminComponent,
    AddEditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
