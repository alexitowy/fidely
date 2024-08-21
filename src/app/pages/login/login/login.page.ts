import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInResult } from '@capacitor-firebase/authentication';
import { NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private firebaseSrv: FirebaseAuthenticationService,
    private utilsSrv: UtilsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  onSubmit() { }

  async signInWith(provider: SignInProvider): Promise<void> {
    const loadingElement = await this.utilsSrv.presentLoading();
    let result: SignInResult;
    try {
      switch (provider) {
        case SignInProvider.apple:
          result = await this.firebaseSrv.signInWithApple();
          break;
        case SignInProvider.facebook:
          result = await this.firebaseSrv.signInWithFacebook();
          break;
        case SignInProvider.google:
          result = await this.firebaseSrv.signInWithGoogle();
          break;
        case SignInProvider.twitter:
          result = await this.firebaseSrv.signInWithTwitter();
          break;
      }
      console.log(result.user);
      this.navigateToHome();
    } finally {
      await loadingElement.dismiss();
      this.utilsSrv.presentToastSuccess(
        'Bienvenido a Fidely'
      )
    }
  }

  send() {
    this.utilsSrv.presentLoading();
  }

  goToForgotPage() {
    this.navCtrl.navigateForward('forgot-password')
  }

  public async signInWithApple(): Promise<void> {
    await this.signInWith(SignInProvider.apple);
  }

  public async signInWithFacebook(): Promise<void> {
    await this.signInWith(SignInProvider.facebook);
  }

  public async signInWithGoogle(): Promise<void> {
    await this.signInWith(SignInProvider.google);
  }

  public async signInWithTwitter(): Promise<void> {
    await this.signInWith(SignInProvider.twitter);
  }

  navigateToHome(): void {
    const user = this.firebaseSrv.getCurrentUser();
    this.navCtrl.navigateForward('/home');
  }
}

enum SignInProvider {
  apple= 'apple',
  facebook= 'facebook',
  google= 'google',
  twitter= 'twitter',
}
