import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss'],
})
export class CardAccountComponent{

  @Input() data: any;

  constructor(
    private readonly navCtrl: NavController,
    private firebaseAuthService: FirebaseAuthenticationService
  ) {}

  async redirectTo():  Promise<void> {
    if(this.data.url === '/login'){
     await this.firebaseAuthService.signOut();
    }
  this.navCtrl.navigateForward(this.data.url);
  }
}
