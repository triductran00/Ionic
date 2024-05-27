import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page15',
  templateUrl: './sample-page15.page.html',
  styleUrls: ['./sample-page15.page.scss'],
})
export class SamplePage15Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSwipe(event: any) {
    const itemE1 = event.target.closest('ion-item-sliding').querrySelector('ion-item');
    const itemValue = itemE1.getAttribute('value');
    console.log('Swiped item value:', itemValue);
  }
}
