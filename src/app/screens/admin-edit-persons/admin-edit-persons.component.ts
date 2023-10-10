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
     })
  }
}
