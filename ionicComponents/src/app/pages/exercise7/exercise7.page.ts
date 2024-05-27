import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.page.html',
  styleUrls: ['./exercise7.page.scss'],
})
export class Exercise7Page implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  cover: string = "https://cdn-icons-png.flaticon.com/512/4345/4345716.png";
  albums: any = [
    {
      title: 'Thriller',
      artist: 'Michael Jackson',
      year: 1982
    },
    {
      title: 'Back in Black',
      artist: 'AC/DC',
      year: 1980
    },
    {
      title: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      year: 1973
    }
  ];

  async showEditAlert(album: any) {
    const editAlert = await this.alertCtrl.create({
      header: 'Edit Album',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'Thriller'
        },
        {
          type: 'text',
          name: 'artist',
          placeholder: 'Michael Jackson'
        }
        ,
        {
          type: 'text',
          name: 'year',
          placeholder: '1982'
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
            album.title = data.title;
            album.artist = data.artist;
            album.year = data.year;
          },
        }
      ]
    });
    await editAlert.present();
  }

  deleteAlbum(album: any) {
    const index = this.albums.indexOf(album);
    if (index > -1) {
      this.albums.splice(index, 1);
    } 
  }
   
  async showDelAlert(album: any) {
    const delAlert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      subHeader: 'Are you sure you want to delete ' + album.title + '?',
      buttons: [
        {
          text: 'Cancel',
          handler() {
            console.log('You clicked "Cancel" Option');
          },
        },
        {
          text: 'Delete',
          handler: () => this.deleteAlbum(album),
        },
      ],
    });
    await delAlert.present();
  }
}
