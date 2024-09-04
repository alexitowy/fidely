import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSearchPageRoutingModule } from './view-search-routing.module';

import { ViewSearchPage } from './view-search.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSearchPageRoutingModule,
    SharedModule
  ],
  declarations: [ViewSearchPage]
})
export class ViewSearchPageModule {}
