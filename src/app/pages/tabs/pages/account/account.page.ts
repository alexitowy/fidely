import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ModalChangePasswordComponent } from 'src/app/shared/components/modal-change-password/modal-change-password.component';
import { ModalDeleteAccountComponent } from 'src/app/shared/components/modal-delete-account/modal-delete-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  currentUser: any;

  constructor(
    private utilsService: UtilsService,
    private modalCtrl: ModalController,
    private readonly navCtrl: NavController,
    private readonly firebaseAuthService: FirebaseAuthenticationService
  ) { }

  async ngOnInit() {
    /*     this.currentUser.photoUrl = null;   */
  }
  
  async ionViewWillEnter(){
    console.log('Holi');
    
    this.currentUser = await this.firebaseAuthService.getCurrentUser();

  }

  getLetter(){
    let letters = 'US';
    const names = this.currentUser?.displayName.split(' ');
    if (names) {
      letters = names[0].charAt(0) + names[1].charAt(0);
    }
    return letters;
  }

  showQr(): void {
    this.utilsService.openQr();
  }

  async deleteAccount(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDeleteAccountComponent,
      id: 'modalDeleteAccount'
    });
    await modal.present();
}

async logOut(){
  await this.firebaseAuthService.signOut();
  this.navCtrl.navigateRoot('/login');
}

async changePassword(): Promise<void> {
  const modal = await this.modalCtrl.create({
    component: ModalChangePasswordComponent,
    id: 'modalChangePassword'
  });
  await modal.present();
}
}
