import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page48',
  templateUrl: './sample-page48.page.html',
  styleUrls: ['./sample-page48.page.scss'],
})
export class SamplePage48Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  highlightedDates = [
    {
      date: '2023-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-01-20',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
    },
    {
      date: '2023-01-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
    },
  ];

}
