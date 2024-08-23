import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
