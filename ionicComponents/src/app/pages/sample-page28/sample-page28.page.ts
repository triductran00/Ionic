import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page28',
  templateUrl: './sample-page28.page.html',
  styleUrls: ['./sample-page28.page.scss'],
})
export class SamplePage28Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCheckboxChange(event : any) {
    console.log('Checkbox value:', event.detail.value);
    console.log('Checkbox change event:', event.detail.checked);
  }
}
