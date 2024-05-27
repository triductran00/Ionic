import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page65',
  templateUrl: './sample-page65.page.html',
  styleUrls: ['./sample-page65.page.scss'],
})
export class SamplePage65Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isDismissable = false;
  onTermsChanged(event: any) {
    this.isDismissable = event.detail.checked;
  }
}
