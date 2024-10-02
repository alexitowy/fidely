import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  isToastOpen: boolean = false;
  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  constructor(
    private readonly utilsService: UtilsService,
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly navCtrl: NavController
  ) {}

  ngOnInit() {}
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  resetPassword(): void {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.controls['email'].value;
      this.utilsService.presentLoading();
      this.firebaseAuthService
        .resetPassword(email)
        .then(() => {
          this.utilsService.presentToastSuccess(
            'Te hemos enviado un correo para restablecer tu contraseña.'
          );
          this.navCtrl.navigateRoot('/login');
        })
        .catch((err) => {
        })
        .finally(() => {
          this.utilsService.hiddenLoading();
        });
    } else {
      this.forgotForm.markAllAsTouched();
    }
  }
}
