import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ModalDeleteAccountComponent } from 'src/app/shared/components/modal-delete-account/modal-delete-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  optionsAccount = [
    {
      img: 'assets/user.png',
      text: 'Datos personales',
      url: '/tabs/profile'
    },
    {
      img: 'assets/card.png',
      text: 'Mis tarjetas',
      url: ''
    },
    {
      img: 'assets/terms.png',
      text: 'Aviso legal',
      url: ''
    },
    {
      img: 'assets/terms.png',
      text: 'Términos y condiciones',
      url: ''
    },
    {
      img: 'assets/help.png',
      text: 'Ayuda',
      url: ''
    },
    {
      img: 'assets/go.png',
      text: 'Cerrar sesión',
      url: '/login'
    },
  ]

  constructor(
    private utilsService: UtilsService,
    private modalCtrl: ModalController
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
}
