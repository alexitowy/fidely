import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent  {
  @Input() shop: CardShop;
  @ViewChild(IonModal) modal: IonModal;
 

  configParams: any = {
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    
   };

   selectedImage = null;
   
  constructor() {
    
  }

  openModal(index: number) {
    this.selectedImage = index; // Imagen seleccionada
      this.modal.present(); // Muestra el modal
  }

  closeModal() {
    this.modal.dismiss(); // Cierra el modal
  }
}
