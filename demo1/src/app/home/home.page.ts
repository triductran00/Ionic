import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;

  constructor(private navCtrl: NavController) {}


  ngOnInit() {
    fetch('./assets/menu.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

  shouldDisplayItem(item: any): boolean {
    return parseFloat(item.rating) >= 4.5;
  }

  goToDetailPage(itemId: number) {
    // this.router.navigate(['/detail/', itemId]);
    this.navCtrl.navigateForward(['detail/', itemId]);
  }
}