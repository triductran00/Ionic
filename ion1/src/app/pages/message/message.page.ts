import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { FirestoreDataService, Message } from 'src/app/firestore-data.service';
import { IonModal } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  userID?: string;
  contentinput?: string;
  message: any[] = [];
  newItem = new Message();

  constructor(private route: ActivatedRoute, private firebaseService: AuthenticationService,
    private router: Router, private firestoreService: FirestoreDataService, private alertController: AlertController) {
    this.route.queryParams.subscribe(params => {
      this.userID = this.route.snapshot.params['user'].split('@')[0];
      this.newItem.user = this.userID;
    });
    this.ShowAllMessage();
  }

  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 1;

  ngOnInit() {
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.message.length / this.itemsPerPage);
  }

  getDisplayedMessages(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.message.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  newMessageIsEmpty: boolean = false;

  createMessage() {
    const now = new Date();
    if (this.newItem.message) {
      this.firestoreService.create(this.newItem)
        .then(() => {
          this.newItem = {
            message: '',
            user: '',
            time: now
          };
          this.newMessageIsEmpty = false; 
        });
      this.cancel();
    } else {
      this.newMessageIsEmpty = true; 
    }
  }
  

  ShowAllMessage() {
    this.firestoreService.getAllDocuments().subscribe(documents => {
      this.message = documents.slice(); 
      this.message.sort((a, b) => {
        const aTimestamp = a.payload.doc.data().time.toMillis();
        const bTimestamp = b.payload.doc.data().time.toMillis();
        return bTimestamp - aTimestamp; 
      });
      this.calculateTotalPages();
    });
  }
  
  

  deleteMessage(itemId: string) {
    this.firestoreService.delete(itemId);
  }

  cancel() {
    this.modal.dismiss();
  }

  async showDeleteConfirmation(itemId: string) {
  const alert = await this.alertController.create({
    header: '確認',
    message: '削除しても良いですか？',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }, {
        text: 'OK',
        handler: () => {
          this.deleteMessage(itemId);
        }
      }
    ]
  });

  await alert.present();
}

calculateElapsedTime(timestamp: any): string {
  const timeDiff = Date.now() - timestamp.toMillis(); // 
  const elapsedHours = Math.floor(timeDiff / (60 * 60 * 1000));
  const elapsedMinutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
  
  let elapsedString = '';
  if (elapsedHours > 0) {
    elapsedString += `${elapsedHours} 時 `;
  }
  if (elapsedMinutes > 0) {
    elapsedString += `${elapsedMinutes} 分 `;
  }

  return elapsedString;
}

async editMessage(itemId: string) {
  const originalMessage = this.getMessageTextById(itemId);

  const alert = await this.alertController.create({
    header: '編集',
    inputs: [
      {
        name: 'editedMessage',
        type: 'text',
        placeholder: 'メッセージを編集する',
        value: originalMessage
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      },
      {
        text: 'Save',
        handler: async data => {
          const editedMessage = data.editedMessage.trim(); 
          if (editedMessage) {
            await this.updateMessage(itemId, editedMessage);
          } else {
            await this.showAlert('Error', 'メッセージの内容を空にすることはできません。');
          }
        }
      }
    ]
  });

  await alert.present();
}

async showAlert(header: string, message: string) {
  const alert = await this.alertController.create({
    header: header,
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

getMessageTextById(itemId: string): string {
  const item = this.message.find(msg => msg.payload.doc.id === itemId);
  return item ? item.payload.doc.data().message : '';
}

async updateMessage(itemId: string, updatedMessage: string) {
  await this.firestoreService.update(itemId, { message: updatedMessage });
}

}

