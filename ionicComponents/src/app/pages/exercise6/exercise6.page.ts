import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.page.html',
  styleUrls: ['./exercise6.page.scss'],
})
export class Exercise6Page implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async showPromptAlert() {
    const promptAlert = await this.alertCtrl.create({
      header: 'Login',
      inputs: [
        {
          type: 'text',
          name: 'username',
          placeholder: 'Username'
        },
        {
          type: 'text',
          name: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler() {
            console.log('You clicked "Cancel" Option');
          },
        },
        {
          text: 'Submit',
          handler(data) {
            console.log("Error: Please fill out all required fields");
          },
        }
      ]
    });
    await promptAlert.present();
  }
}
