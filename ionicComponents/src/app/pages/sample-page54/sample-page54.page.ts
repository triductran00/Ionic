import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page54',
  templateUrl: './sample-page54.page.html',
  styleUrls: ['./sample-page54.page.scss'],
})
export class SamplePage54Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
