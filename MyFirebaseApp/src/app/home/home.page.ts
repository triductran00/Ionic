import { Component } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firebaseService: FirebaseAuthService) {}

  SignIn() {
    this.firebaseService.signInWithGoogle();
  }
}
