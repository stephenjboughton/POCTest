import { Component, OnInit } from '@angular/core';
import { pocEvent } from './poclib-types';

@Component({
  selector: 'cmpts-POCLib',
  templateUrl: './poclib.component.html',
  styleUrls: [
    './poclib.component.scss'
  ]
})
export class POCLibComponent implements OnInit {

  constructor() { }

  public pocEvent: pocEvent = new pocEvent();
  public title = 'poc-component';

  ngOnInit(): void {
    console.log(this.pocEvent);
  }

  public save() {
    console.log(this.pocEvent);
    
  }

}
