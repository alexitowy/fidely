import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { CardBons } from 'src/app/core/interfaces/dataCard.interface';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  bonds: CardBons[] = [];
  bondsView: CardBons[] = [];
  noResults: boolean;
  filters: string[] = [];
  wordSearch: string = '';

  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly navCtr: NavController,
    private readonly localStorageService: LocalStorageService,
    private utilsService: UtilsService 
  ) { }

  async ionViewWillEnter(): Promise<void> {
    this.bonds = (await this.localStorageService.get(KeyStorage.BONDS)) || [];
    this.bondsView = [...this.bonds];
    this.sortFavorite();
  }

  async logOut(): Promise<void> {
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
    this.sortFavorite();
  }

  private sortFavorite(): void {
    this.bondsView = this.bondsView.sort((a: CardBons, b: CardBons) => {
      if (a.favorite === b.favorite) {
        return 0;
      } else if (a.favorite === true) {
        return -1;
      }
      return 1;
    });
  }

  search(wordSearch: string): void {
    if (typeof wordSearch === 'string') {
      this.wordSearch = wordSearch;
      if (wordSearch === '') {
        if (this.filters.length > 0) {
          this.filterCategory();
          this.sortFavorite();
        } else {
          this.bondsView = [...this.bonds];
        }
        this.noResults = this.bondsView.length === 0;
      } else {
        if (this.filters.length > 0) {
          this.filterCategory();
          this.sortFavorite();
          this.bondsView = this.bondsView.filter((bond: CardBons) => {
            return bond.title.toLocaleLowerCase().includes(wordSearch.toLocaleLowerCase());
          });
        } else {
          this.bondsView = this.bonds.filter((bond: CardBons) => {
            return bond.title.toLocaleLowerCase().includes(wordSearch.toLocaleLowerCase());
          });
        }
        this.noResults = this.bondsView.length === 0;
      }
    }
  }

  filterEvent(event: string[]) {
    this.filters = event;
    if (this.filters.length > 0) {
      this.filterCategory();
      this.sortFavorite();
      if (this.wordSearch !== '') {
        this.bondsView = this.bondsView.filter((bond: CardBons) => {
          return bond.title.toLocaleLowerCase().includes(this.wordSearch.toLocaleLowerCase());
        });
      }
    } else {
      if(this.wordSearch !== '') {
        this.bondsView = this.bonds.filter((bond: CardBons) => {
          return bond.title.toLocaleLowerCase().includes(this.wordSearch.toLocaleLowerCase());
        });
      } else {
        this.bondsView = [...this.bonds];
      }
    }
    this.noResults = this.bondsView.length === 0;
  }

  private filterCategory() {
    this.bondsView = this.bonds.filter((bond: CardBons) => {
      return this.filters.includes(bond.categoryId);
    });
  }

  showQr(): void {
    this.utilsService.openQr();
  }
}

