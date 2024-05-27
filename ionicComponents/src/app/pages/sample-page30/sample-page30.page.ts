import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page30',
  templateUrl: './sample-page30.page.html',
  styleUrls: ['./sample-page30.page.scss'],
})
export class SamplePage30Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedColor: string = '';

  showSelectedColor() {
    console.log('Selected color:', this.selectedColor);
  }
}
