import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-page',
  templateUrl: './all-page.page.html',
  styleUrls: ['./all-page.page.scss'],
})
export class AllPagePage implements OnInit {
  data: any;
  
  constructor() { }

  ngOnInit() {
    fetch('./assets/menu.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

}