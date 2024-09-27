import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { CardBons } from 'src/app/core/interfaces/dataCard.interface';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

  bonds: CardBons[] = [];
  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly navCtr: NavController,
    private readonly localStorageService: LocalStorageService
  ) {}

  
  async ionViewWillEnter(){
    this.bonds = (await this.localStorageService.get(KeyStorage.BONDS)) || [];
    //TODO ordenar por favoritos y tener en cuenta cuando se cambi un favorito volver a ordenar

  }
  async logOut() {
    await this.firebaseAuthService.signOut();
    this.navCtr.navigateRoot('/login');
  }
  async touchFavCard(card: CardBons) {
    this.bonds = (await this.localStorageService.get(KeyStorage.BONDS)) || [];
    if (card.favorite === true) {
      this.bonds.forEach((bond) => {
        if (bond.id === card.id) {
          bond.favorite = false;
        }
      });
      card.favorite = false;
    } else {
      this.bonds.forEach((bond) => {
        if (bond.id === card.id) {
          bond.favorite = true;
        }
      });
      card.favorite = true;

    }
    await this.localStorageService.set(KeyStorage.BONDS, this.bonds);
  }
}
