import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInResult } from '@capacitor-firebase/authentication';
import { NavController } from '@ionic/angular';
import { SignInProvider } from 'src/app/core/enums/singInProvider.enum';
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
    this.utilsSrv.presentLoading();
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
    }catch (err){
      this.utilsSrv.presentToastDanger('No se ha completado el inicio de sesión.');
    } finally {
      this.utilsSrv.hiddenLoading();
    }
  }

  send() {
    if(this.loginForm.valid){
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;
      this.utilsSrv.presentLoading();
      this.firebaseSrv.signInWithEmailAndPassword(email, password).then(()=>{
        this.loginForm.reset();
        this.navigateToHome();
      }).catch((err)=>{
        this.utilsSrv.presentToastDanger('Los datos introducidos son incorrectos.');
      }).finally(()=>{
        this.utilsSrv.hiddenLoading();
      });
    }else{
      this.loginForm.markAllAsTouched();
    }
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


