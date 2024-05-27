import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise18',
  templateUrl: './exercise18.page.html',
  styleUrls: ['./exercise18.page.scss'],
})
export class Exercise18Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  highlightedDates = [
    {
      date: 'Mon',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: 'Tue',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
  ]
}
