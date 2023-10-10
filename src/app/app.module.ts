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
import { AdminEditPersonsComponent } from './screens/admin-edit-persons/admin-edit-persons.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieDetailsComponent,
    EditProfileComponent,
    FavoritesComponent,
    SignUComponent,
    AdminEditPersonsComponent,
    NavBarComponent
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
