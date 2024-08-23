import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loading: HTMLIonLoadingElement;
  constructor(
    private readonly toastController: ToastController,
    private readonly loadingController: LoadingController,
    private readonly router: Router
  ) { }

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
        spinner: 'bubbles'
      });
    await this.loading.present();
  }

  hiddenLoading(){
    this.loading.dismiss();
  }

  routerLink(url: string) {
    this.router.navigateByUrl(url);
  }

}
