import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { ModalQrComponent } from 'src/app/shared/components/modal-qr/modal-qr.component';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  loading: HTMLIonLoadingElement;
  constructor(
    private readonly toastController: ToastController,
    private readonly loadingController: LoadingController,
    private readonly router: Router,
    private readonly actionSheetCtrl: ActionSheetController,
    private readonly modalCtrl: ModalController
  ) {}

  async presentToast(
    text: string,
    position: 'top' | 'middle' | 'bottom' = 'bottom',
    state: string | undefined = undefined,
    duration = 1500
  ) {
    const toast = await this.toastController.create({
      message: text,
      duration,
      position: position,
      color: state,
    });

    await toast.present();
  }

  presentToastDanger(
    text: string,
    duration = 7000,
    position: 'top' | 'middle' | 'bottom' = 'bottom'
  ) {
    this.presentToast(text, position, 'danger', duration);
  }

  presentToastWarning(
    text: string,
    position: 'top' | 'middle' | 'bottom' = 'bottom'
  ) {
    this.presentToast(text, position, 'warning');
  }

  presentToastInfo(
    text: string,
    position: 'top' | 'middle' | 'bottom' = 'bottom'
  ) {
    this.presentToast(text, position, 'secondary');
  }

  presentToastSuccess(
    text: string,
    position: 'top' | 'middle' | 'bottom' = 'bottom'
  ) {
    this.presentToast(text, position, 'success');
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
    });
    await this.loading.present();
  }

  hiddenLoading() {
    this.loading.dismiss();
  }

  routerLink(url: string) {
    this.router.navigateByUrl(url);
  }

  async confirmDelete(header: string) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: header,
      buttons: [
        {
          text: 'Sí',
          role: 'destructive',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'destructive';
  }

  async openQr(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalQrComponent,
      id: 'modalQr'
    }
    )
    modal.present();
  }
}
