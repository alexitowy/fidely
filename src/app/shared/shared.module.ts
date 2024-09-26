import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BondsComponent } from './components/bonds/bonds.component';
import { CardAccountComponent } from './components/card-account/card-account.component';
import { CardComponent } from './components/card/card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalFiltersComponent } from './components/modal-filters/modal-filters.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SearchComponent } from './components/search/search.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

import { register } from 'swiper/element/bundle';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { ModalIframeComponent } from './components/modal-iframe/modal-iframe.component';
import { CardBondsComponent } from './components/card-bonds/card-bonds.component';


register();

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CardComponent,
    OverviewComponent,
    GalleryComponent,
    BondsComponent,
    CardAccountComponent,
    ModalFiltersComponent,
    SwiperComponent,
    ModalConfirmComponent,
    CardInfoComponent,
    ModalIframeComponent,
    CardBondsComponent
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    SearchComponent,
    CardComponent,
    OverviewComponent,
    GalleryComponent,
    BondsComponent,
    CardAccountComponent,
    ModalFiltersComponent,
    SwiperComponent,
    ModalConfirmComponent,
    CardInfoComponent,
    ModalIframeComponent,
    CardBondsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
