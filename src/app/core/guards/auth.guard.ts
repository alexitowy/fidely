import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from '../services/firebase-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private readonly firebaseAuthenticationService: FirebaseAuthenticationService,
    private readonly navCtr: NavController
  ) { }

  public async canActivate(): Promise<boolean> {
    const user = await this.firebaseAuthenticationService.getCurrentUser();
    console.log('GUAR',user)
    if (user) {
      return true;
    }
    return this.navCtr.navigateRoot('/login');
  }
}