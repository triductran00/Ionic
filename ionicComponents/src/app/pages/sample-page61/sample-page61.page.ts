import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page61',
  templateUrl: './sample-page61.page.html',
  styleUrls: ['./sample-page61.page.scss'],
})
export class SamplePage61Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
}
