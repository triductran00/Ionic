import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sea-food-page',
  templateUrl: './sea-food-page.page.html',
  styleUrls: ['./sea-food-page.page.scss'],
})
export class SeaFoodPagePage implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/menu.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }
}
