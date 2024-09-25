import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() shop: DataCard;

  configParams: any = {
    slidesPerView: 1,
    navigation: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
   };

  constructor() {}

  ngOnInit() {}
}
