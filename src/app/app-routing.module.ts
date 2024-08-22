import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
