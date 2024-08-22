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

  isToastOpen = false;

  forgotForm: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.email, Validators.required]),
    confirmEmail:new FormControl('', [Validators.email, Validators.required])
  },
{
  validators: this.validations('email', 'confirmEmail')
})

  constructor(
    private readonly utilsService: UtilsService,
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean){
    this.isToastOpen = isOpen;
  }

  validations(email:string, confirmEmail:string){
    return (form: FormGroup) => {
      let currentEmail = form.get(email).value;
      let currentConfirmEmail= form.get(confirmEmail).value;
      if(currentEmail !== currentConfirmEmail){
        let errors = form.get(confirmEmail).errors;
        if(errors === null){
          errors= {};
        }
        errors['match']=true;
        form.get(confirmEmail).setErrors(errors);
        return null;
      }
      if(form.get(confirmEmail).errors !== null){
        delete form.get(confirmEmail).errors['match'];
      }

    }
  }

  errorMsgConfirmEmail(){
    if (this.forgotForm.controls['confirmEmail'].errors?.['required']) {
      return 'Este campo es requerido';
    } else if (this.forgotForm.controls['confirmEmail'].errors?.['email']){
      return 'No es un formato válido.';
    } else {
      return 'El correo no coincide.';
    }
  }

  resetPassword(){

    if(this.forgotForm.valid){
      const email = this.forgotForm.controls['email'].value;
      this.utilsService.presentLoading();
      this.firebaseAuthService.resetPassword(email).then(()=>{
        this.utilsService.presentToastSuccess('Te hemos enviado un correo para restablecer tu contraseña.');
        this.navCtrl.navigateRoot('/login');
      }).catch((err)=>{
        console.log(err);
      }).finally(()=>{
        this.utilsService.hiddenLoading();
      });

    }else{
      this.forgotForm.markAllAsTouched();
    }
  }
}
