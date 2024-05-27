import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular'

@Component({
  selector: 'app-sample-page16',
  templateUrl: './sample-page16.page.html',
  styleUrls: ['./sample-page16.page.scss'],
})
export class SamplePage16Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
}
