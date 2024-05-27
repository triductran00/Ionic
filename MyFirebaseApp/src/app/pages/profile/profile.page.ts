import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { FirestoreDataService, Tutorial } from 'src/app/services/firestore-data.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  userName: string = "";
  userEmail: string = "";
  tutorials: any[] = [];
  newItem = new Tutorial();

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseAuthService,
    private router: Router, private firestoreService: FirestoreDataService) {
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
      this.userName = params['name'];
    });
    this.ShowAllTutorials();
  }

  ngOnInit() {
  }

  SignOut() {
    this.firebaseService.signOutFromGoogle();
    this.router.navigate(['/home']);
  }

  ShowAllTutorials() {
    this.firestoreService.getAllDocuments().subscribe(documents => {
      this.tutorials = documents;
    });
  }

  deleteTutorial(itemId: string) {
    this.firestoreService.delete(itemId);
  }

  cancel() {
    this.modal.dismiss();
  }

  createTutorial() {
    this.firestoreService.create(this.newItem)
      .then(() => {
        this.newItem = {
          title: '',
          subject: ''
        };
      })
    this.cancel();
  }
}
