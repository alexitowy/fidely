import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Share } from '@capacitor/share';
import { NavController } from '@ionic/angular';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  viewSelected = 'bonds';
  favoriteShops: any[];
  shop: CardShop;

  constructor(
    private readonly navCtrl: NavController,
    private readonly localStorageService: LocalStorageService,
    private readonly route: ActivatedRoute
  ) {
    this.route.params.subscribe(async (params) => {
      const id = params['id'];
      const shops = (await this.localStorageService.get(KeyStorage.SHOPS)) || [];
      this.shop = shops.find((shop: CardShop) => shop.id === id);
      this.checkIsFavorite();
    });
  }

  async checkIsFavorite() {
    this.favoriteShops =
      (await this.localStorageService.get(KeyStorage.SHOPFAVORITES)) || [];
    if (this.favoriteShops.length > 0) {
      const favoriteShop = this.favoriteShops.find(
        (favShop) => favShop.id === this.shop.id
      );
      if (favoriteShop !== undefined) {
        this.shop.favorite = true;
      }
    }
  }
  handlerChange(event: any) {
    this.viewSelected = event.detail.value;
  }

  async toogleFavorite() {
    this.favoriteShops =
      (await this.localStorageService.get(KeyStorage.SHOPFAVORITES)) || [];

    if (this.shop.favorite === true) {
      this.favoriteShops = this.favoriteShops.filter(
        (shop) => shop.id !== this.shop.id
      );
      this.shop.favorite = false;
    } else {
      this.shop.favorite = true;
      this.favoriteShops.push(this.shop);
    }
    await this.localStorageService.set(
      KeyStorage.SHOPFAVORITES,
      this.favoriteShops
    );
  }

  async share() {
    await Share.share({
      title: 'test',
      text: 'test',
      url: 'https://maps.app.goo.gl/KnEHFvo8GiyVDgNn7',
      dialogTitle: 'testing',
    });
  }

  backNavigate() {
    this.navCtrl.navigateRoot('/tabs/view-search');
  }
}
