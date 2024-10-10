import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, RadioGroupCustomEvent } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-modal-delete-account',
  templateUrl: './modal-delete-account.component.html',
  styleUrls: ['./modal-delete-account.component.scss'],
})
export class ModalDeleteAccountComponent  implements OnInit {
  reasonSelected: string;
  noSelected = false;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly utilsService: UtilsService,
    private readonly localStorageService: LocalStorageService,
    private readonly navCtrl: NavController,
    private readonly firebaseAuthService: FirebaseAuthenticationService
  ) { }

  ngOnInit() {}
  
  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  otherDesc(event: RadioGroupCustomEvent): void{
    this.reasonSelected = event.detail.value;
    this.noSelected = false;
  }

  async delete(): Promise<void>{
    if (this.reasonSelected !== undefined){
      const confirmModal = await this.utilsService.confirmDelete('¿Quieres eliminar tu cuenta?');
      if(confirmModal){
        await this.localStorageService.clear();
        await this.modalCtrl.dismiss();
        this.utilsService.presentToastSuccess('Cuenta eliminada con éxito.');
        await this.firebaseAuthService.deleteAccount();
        this.navCtrl.navigateRoot('/login');
      }
    } else {
      this.noSelected = true;
    }
  }
}

