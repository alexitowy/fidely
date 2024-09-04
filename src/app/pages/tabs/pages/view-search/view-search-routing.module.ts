import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSearchPage } from './view-search.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSearchPageRoutingModule {}
