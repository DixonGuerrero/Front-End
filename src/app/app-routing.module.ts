import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPersonsComponent } from './screens/admin-edit-persons/admin-edit-persons.component';


const routes: Routes = [
  { path: 'admin/edit/person', component:AdminEditPersonsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
