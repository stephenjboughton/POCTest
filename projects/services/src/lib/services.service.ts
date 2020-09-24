import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  public broadcast() {
    console.log("We are reaching you from some place far, far away.");
  }
}
