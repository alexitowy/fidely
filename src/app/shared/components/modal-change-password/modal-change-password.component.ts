import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.scss'],
})
export class ModalChangePasswordComponent  implements OnInit {
  changePassword: FormGroup = new FormGroup(
    {
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
        ),
      ]),
      confirmNewPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
        ),
      ]),
  },
  {
    validators: [
      this.EqualsValidators('newPassword', 'confirmNewPassword'),
    ],
  });

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly utilsService: UtilsService,
  ) { }

  ngOnInit() {}
  getMsgErrorPassword() {
    if (this.changePassword.controls['confirmNewPassword'].errors?.['required']) {
      return 'Este campo es requerido';
    } else if (this.changePassword.controls['confirmNewPassword'].errors?.['minLength'] || this.changePassword.controls['confirmNewPassword'].errors?.['pattern']) {
      return 'Debe tener un mínimo de 6 a 10 caracteres, una letra mayúscula, un número y un caracter especial.';
    } else {
      return 'La contraseña no coincide.';
    }
  }
  EqualsValidators(item1: string, item2: string) {
    return (form: FormControl): ValidationErrors => {
      if (form.get(item1).value !== form.get(item2).value) {
        let currentErrors = form.get(item2).errors;
        if (currentErrors === null) {
          currentErrors = { 'missMatch': true };
        } else {
          currentErrors['missMatch'] = true;
        }
        form.get(item2).setErrors(currentErrors);
        return null;
      }
      if (form.get(item2).errors !== null) {
        delete form.get(item2).errors['missMatch'];
      }
      return null;
    };
  }

  onClose(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async update(): Promise<void>{
    if(this.changePassword.valid){
      await this.firebaseAuthService.updatePassword(this.changePassword.controls['newPassword'].value);
      this.utilsService.presentToastSuccess('Su contraseña ha sido actualizada');
      this.modalCtrl.dismiss(null, 'sucess');
    } else {
      this.changePassword.markAllAsTouched();
    }
    
  }
}
