import { Component, Input, OnInit } from '@angular/core';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';
import { DataSwiper } from 'src/app/core/interfaces/dataSwiper.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent  {
  @Input() shop: CardShop;

  img: DataSwiper[];
  configParams: any = {
    slidesPerView: 1,
    navigation: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
   };

  constructor() {}


}
