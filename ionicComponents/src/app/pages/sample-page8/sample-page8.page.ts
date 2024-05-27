import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sample-page8',
  templateUrl: './sample-page8.page.html',
  styleUrls: ['./sample-page8.page.scss'],
})
export class SamplePage8Page implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async showPromptAlert() {
    const promptAlert = await this.alertCtrl.create({
      header: 'User Info',
      subHeader: 'Enter your information',
      inputs: [
        {
          type: 'text',
          name: 'firstName',
          placeholder: 'FIRST NAME'
        },
        {
          type: 'text',
          name: 'lastName',
          placeholder: 'LAST NAME'
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
          text: 'Save',
          handler(data) {
            console.log("First Name: " + data.firstName + "\nLast Name: " +
              data.lastName);
          },
        }
      ]
    });
    await promptAlert.present();
  }
}
