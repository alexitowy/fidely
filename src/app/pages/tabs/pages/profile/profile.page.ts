import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  profileForm: FormGroup ;

  currentUser: any;

  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly utilsService: UtilsService,
    private readonly navCtrl: NavController
  ) {}
  
  async ionViewWillEnter(){
    this.currentUser = await this.firebaseAuthService.getCurrentUser();
    this.builderForm();
  }

  builderForm(){
    this.profileForm = new FormGroup({
      name: new FormControl(
        this.currentUser?.displayName ? this.currentUser.displayName : '', [
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required,
      ]),
      email: new FormControl(
        this.currentUser?.email ?  this.currentUser.email : '', [Validators.email, Validators.required]),
      dateBirth: new FormControl(null),
      phone: new FormControl(this.currentUser?.phone ? this.currentUser.phone : '', [
        Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g),
      ]),
    });
  }

  async onUpdate() {
    if (this.profileForm.valid) {
      await this.firebaseAuthService.updateData(this.profileForm.controls['name'].value);
      this.utilsService.presentToastSuccess('Datos actualizados');
      this.navCtrl.navigateBack('/tabs/account');
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
 