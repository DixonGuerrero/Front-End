import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/personas/'

  }

  getListPersons(): Observable<Person[]> {
    
    let login = this.http.get<Person[]>(`${this.myAppUrl}${this.myApiUrl}`);

    login.subscribe((data) => {
      console.log(data)
    })
    
    return login


  }

  deletePerson(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveProduct(persona: Person): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,persona);
  }
}
