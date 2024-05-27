import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private afAuth: AngularFireAuth, private router: Router,private firebaseService:AuthenticationService) {}
  
  useremail?:string;
  userpassword?:string;
  user?:string;

  async logIn() {
    console.log(this.useremail+' '+this.userpassword);
    if(this.useremail && this.userpassword){
      this.firebaseService.signIn(this.useremail,this.userpassword);
      try{
        await this.afAuth.signInWithEmailAndPassword(this.useremail,this.userpassword)
        .then(res => {
          console.error('Log in'); 
          this.router.navigate(['/message/', this.useremail]);
        })
      }catch (error) {
        alert('メールアドレスまたはパスワードが一致しません'); 
      }
    }
    else {
      if(this.useremail){
        this.showAlert('パスワード');
      }
      else{
        this.showAlert('ユーザID'); 
      }
    }
  }

  showAlert(text:string): void {
    alert(text +' を入力してください');
  }
}
