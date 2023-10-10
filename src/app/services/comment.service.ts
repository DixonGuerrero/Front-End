import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
   private myAppUrl: string;
  
  constructor() {
    this.myAppUrl = environment.endpoint;
  }
}
