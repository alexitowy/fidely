import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ModalIframeComponent } from 'src/app/shared/components/modal-iframe/modal-iframe.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
        ),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
        ),
      ]),
      terms: new FormControl(null, Validators.requiredTrue),
    },
    {
      validators: [
        this.EqualsValidators('password', 'confirmPassword'),
      ],
    }
  );

  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly utilsService: UtilsService,
    private readonly navController: NavController,
    private readonly modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async register() {
    
    if(this.registerForm.valid){
      const email = this.registerForm.controls['email'].value;
      const password = this.registerForm.controls['password'].value;
      this.utilsService.presentLoading();

      this.firebaseAuthService.CreateWithEmailAndPassword(email, password).then((data)=>{
        this.utilsService.hiddenLoading();
        this.utilsService.presentToastSuccess('Su usuario se ha creado correctamente.');
        this.navController.navigateRoot('/tabs');
      });
    }else {
      this.registerForm.markAllAsTouched();
    }
  }

  checkValidationMinLength() {
    const value = this.registerForm.controls['password'].value;
    if (value.length >= 6 && value.length <= 10) {
      return true;
    }
    return false;
  }

  checkValidationUppercase() {
    const value = this.registerForm.controls['password'].value;

    if (value.match(/[A-Z]/g) !== null) {
      return true;
    }
    return false;
  }

  checkValidationNumber() {
    const value = this.registerForm.controls['password'].value;

    if (value.match(/\d/g) !== null) {
      return true;
    }
    return false;
  }

  checkValidationCharacter() {
    const value = this.registerForm.controls['password'].value;

    if (value.match(/[#?!@$ %^&*-]/g) !== null) {
      return true;
    }
    return false;
  }

  EqualsValidators(item1: string, item2: string) {
    return (form: FormControl): ValidationErrors => {
      if (form.get(item1).value !== form.get(item2).value) {
        let currentErrors = form.get(item2).errors;
        if(currentErrors === null){
          currentErrors = {'missMatch': true};
        } else {
          currentErrors['missMatch'] = true;
        }
        form.get(item2).setErrors(currentErrors);
        return null;
      }
      if(form.get(item2).errors !== null){
        delete form.get(item2).errors['missMatch'];
      }
      return null;
    };
  }
  getMsgErrorPassword() {
    if (this.registerForm.controls['confirmPassword'].errors?.['required']) {
      return 'Este campo es requerido';
    } else if (this.registerForm.controls['confirmPassword'].errors?.['minLength'] || this.registerForm.controls['confirmPassword'].errors?.['pattern']){
      return 'Debe tener un mínimo de 6 a 10 caracteres, una letra mayúscula, un número y un caracter especial.';
    } else {
      return 'La contraseña no coincide.';
    }
  }
  async openModal(title: string){
    const modal = await this.modalCtrl.create({
      component: ModalIframeComponent,
      componentProps: {
        title: title,
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    
    }
  }
  }
