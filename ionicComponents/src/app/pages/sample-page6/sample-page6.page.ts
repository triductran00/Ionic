import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sample-page6',
  templateUrl: './sample-page6.page.html',
  styleUrls: ['./sample-page6.page.scss'],
})
export class SamplePage6Page implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showBasicAlert() {
    const alertBox = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'subTitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alertBox.present();
  }
}
