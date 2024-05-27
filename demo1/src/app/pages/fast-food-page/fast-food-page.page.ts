import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast-food-page',
  templateUrl: './fast-food-page.page.html',
  styleUrls: ['./fast-food-page.page.scss'],
})
export class FastFoodPagePage implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/menu.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }
}