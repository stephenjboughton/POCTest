import { Injectable } from '@angular/core';
import { pocEvent } from './poclib-types';

@Injectable({
  providedIn: 'root'
})
export class POCLibService {

  constructor() { }

  public shareWithConsole() {
    console.log('we used the service');
  }

  public processData(event: pocEvent) {
    console.log(`the service sees this ${event.description} event and will plan for it on ${event.date}`);
  }
  
}
