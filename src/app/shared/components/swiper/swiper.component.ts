import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataSwiper } from 'src/app/core/interfaces/dataSwiper.interface';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent  implements OnInit {
  @ViewChild('swiper', {static:true}) swiper;

  @Input() swiperParams: SwiperOptions = {
    slidesPerView: 1,
  };

  @Input() dataImg: DataSwiper [];
  @Input() seletedImage: number = 0;

  constructor() { 
    
    console.log('Inicio');
  }

  ngOnInit(): void {
    this.swiperParams.initialSlide = this.seletedImage;
    Object.assign(this.swiper.nativeElement, this.swiperParams);
    this.swiper.nativeElement.initialize();
  }
}
