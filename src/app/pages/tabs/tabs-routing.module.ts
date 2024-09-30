import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'home',
        loadChildren: ()=> import('./pages/home/home.module').then( m => m.HomePageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'view-search',
        loadChildren: () => import('./pages/view-search/view-search.module').then( m => m.ViewSearchPageModule),
        //canActivate: [AuthGuard],
      },
      {
        path: 'details/:id',
        loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
