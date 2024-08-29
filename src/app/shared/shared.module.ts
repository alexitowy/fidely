import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BondsComponent } from './components/bonds/bonds.component';
import { CardAccountComponent } from './components/card-account/card-account.component';
import { RouterLink } from '@angular/router';
import { ModalFiltersComponent } from './components/modal-filters/modal-filters.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CardComponent,
    OverviewComponent,
    GalleryComponent,
    BondsComponent,
    CardAccountComponent,
    ModalFiltersComponent
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
    ModalFiltersComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ]
})
export class SharedModule { }
