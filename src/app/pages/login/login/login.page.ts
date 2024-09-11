import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInResult } from '@capacitor-firebase/authentication';
import { NavController, Platform } from '@ionic/angular';
import { SignInProvider } from 'src/app/core/enums/singInProvider.enum';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  providers = SignInProvider;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });
  isPlatformIos: boolean;
  size = 3;

  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly utilsService: UtilsService,
    private readonly navCtrl: NavController,
    private readonly platform: Platform
  ) {}

  ngOnInit() {
    this.isPlatformIos = this.platform.is('ios');
    if(!this.isPlatformIos){
      this.size =  4;
    }
  }

  onSubmit() {}

  async signInWith(provider: SignInProvider): Promise<void> {
    await this.utilsService.presentLoading();
    let result: SignInResult;
    try {
      switch (provider) {
        case SignInProvider.apple:
          result = await this.firebaseAuthService.signInWithApple();
          break;
        case SignInProvider.facebook:
          result = await this.firebaseAuthService.signInWithFacebook();
          break;
        case SignInProvider.google:
          result = await this.firebaseAuthService.signInWithGoogle();
          break;
        case SignInProvider.twitter:
          result = await this.firebaseAuthService.signInWithTwitter();
          break;
      }
      this.navCtrl.navigateForward('/tabs');
    } catch (err) {
      this.utilsService.presentToastDanger(
        'No se ha completado el inicio de sesión.'
      );
    } finally {
      this.utilsService.hiddenLoading();
    }
  }

  send() {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;
      this.utilsService.presentLoading();

      this.firebaseAuthService
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.loginForm.reset();
          this.navCtrl.navigateForward('/tabs');
        })
        .catch((err) => {
          this.utilsService.presentToastDanger(
            'Los datos introducidos son incorrectos.'
          );
        })
        .finally(() => {
          this.utilsService.hiddenLoading();
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  goToForgotPage() {
    this.loginForm.reset();
    this.navCtrl.navigateForward('forgot-password');
  }
}
