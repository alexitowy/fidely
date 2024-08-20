import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private readonly toastController: ToastController) { }


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
    duration = 1500,
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

}
