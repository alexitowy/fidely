import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Share } from '@capacitor/share';
import { NavController } from '@ionic/angular';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  viewSelected = 'bonds';
  favoriteShops: any[];
  shop = {
    id: '1',
    favorite: false,
    cover:
      'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
    logo: 'https://www.baobabelleza.com/wp-content/uploads/2018/10/Logo_home160x160.png',
    name: 'Baoba Belleza',
    category: 'Medicina estética',
  };

  constructor(
    private readonly navCtrl: NavController,
    private readonly localStorageService: LocalStorageService,
    private readonly route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
    });

    const shops = (await this.localStorageService.get(KeyStorage.SHOPS)) || [];
    this.shop = shops.find((shop) => shop.id === this.shop.id);


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
    this.navCtrl.back();
  }
}
