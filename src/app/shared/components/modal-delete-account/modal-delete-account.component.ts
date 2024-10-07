import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, RadioGroupCustomEvent } from '@ionic/angular';
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
    private modalCtrl: ModalController,
    private readonly utilsService: UtilsService
  ) { }

  ngOnInit() {}
  
  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  otherDesc(event: RadioGroupCustomEvent){
    this.reasonSelected = event.detail.value;
    this.noSelected = false;
  }

  async delete(){
    if (this.reasonSelected !== undefined){
      const confirmModal = await this.utilsService.confirmDelete('¿Quieres eliminar tu cuenta?');
    } else {
      this.noSelected = true;
    }
  }
}

