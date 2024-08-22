import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly navCtr: NavController) { }

  ngOnInit() {
  }

  async logOut(){
    await this.firebaseAuthService.signOut();
    this.navCtr.navigateRoot('/login');

  }

}
