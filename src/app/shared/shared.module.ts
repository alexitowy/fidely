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



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CardComponent,
    OverviewComponent,
    GalleryComponent,
    BondsComponent
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    SearchComponent,
    CardComponent,
    OverviewComponent,
    GalleryComponent,
    BondsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
