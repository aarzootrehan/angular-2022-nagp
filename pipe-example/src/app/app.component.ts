import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pipe-example';
  dateToday: string;

  name: string;

  constructor() { }

  ngOnInit(): void {

    this.dateToday = new Date().toDateString();

    this.name = "NAGP Angular 2022"

  } 
  
}
