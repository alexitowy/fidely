import { Component, Input, OnInit } from '@angular/core';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';
import { DataSwiper } from 'src/app/core/interfaces/dataSwiper.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() shop: CardShop;

  img: DataSwiper[];
  configParams: any = {
    slidesPerView: 1,
    navigation: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
   };

  constructor() {}

  ngOnInit() {
    this.img = [
      {
        id: '',
        img: 'Baoba',
        url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/pestanas_lifting_3D-300x300-1.png',
      },
      {
        id: '',
        img: 'Baoba',
        url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/manicura-_-unas-gel-acrilico-300x300-1.jpg',
      },
    ];
  }
}
