import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public shareWithConsole(person: Person) {
    console.log(`${person.Handle} is trying to login.`);
  }
  
}
