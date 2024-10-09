import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ModalDeleteAccountComponent } from 'src/app/shared/components/modal-delete-account/modal-delete-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private modalCtrl: ModalController,
    private readonly navCtrl: NavController,
    private readonly firebaseAuthService: FirebaseAuthenticationService
  ) { }

  ngOnInit() {
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
}
