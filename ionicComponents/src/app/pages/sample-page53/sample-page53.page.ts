import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page53',
  templateUrl: './sample-page53.page.html',
  styleUrls: ['./sample-page53.page.scss'],
})
export class SamplePage53Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedSegment: string = "pin";
  onSegmentChanged() {
    console.log("Selected segment:", this.selectedSegment);
  }
}
