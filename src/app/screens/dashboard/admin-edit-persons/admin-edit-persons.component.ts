import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-admin-edit-persons',
  templateUrl: './admin-edit-persons.component.html',
  styleUrls: ['./admin-edit-persons.component.css']
})
export class AdminEditPersonsComponent {

  listPerson: Person[] = [];

  constructor(private _PersonService: PersonService) {
    
  }

  ngOnInit(): void{
    this.getListPerson();
  }

  getListPerson() {
    this._PersonService.getListPersons().subscribe((data) => {
      this.listPerson = data;

       this.listPerson.forEach(item => {
          if (item.Id_Tipo_Usuario == '1') {
              item.Id_Tipo_Usuario ='Admin';
          } else {
              item.Id_Tipo_Usuario = 'Cliente';
          }
      });
    })
   
  }

  deletePerson(id: number) {
    this._PersonService.deletePerson(id).subscribe(() => { 
      this.getListPerson();
    })
  }
  
}
