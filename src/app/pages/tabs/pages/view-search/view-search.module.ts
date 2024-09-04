import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSearchPageRoutingModule } from './view-search-routing.module';

import { ViewSearchPage } from './view-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSearchPageRoutingModule
  ],
  declarations: [ViewSearchPage]
})
export class ViewSearchPageModule {}
