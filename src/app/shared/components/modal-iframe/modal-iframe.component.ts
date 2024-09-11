import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-iframe',
  templateUrl: './modal-iframe.component.html',
  styleUrls: ['./modal-iframe.component.scss'],
})
export class ModalIframeComponent  implements OnInit {

  @Input() title: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    return this.modalCtrl.dismiss(null, 'close');
  }
}
