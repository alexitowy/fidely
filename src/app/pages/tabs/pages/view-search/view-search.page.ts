import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';
import { DataSwiper } from 'src/app/core/interfaces/dataSwiper.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.page.html',
  styleUrls: ['./view-search.page.scss'],
})
export class ViewSearchPage implements OnInit {
  configParams: any = {
    slidesPerView: 1,
    navigation: false,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoHeight: true,
  };
  lstSwiper: DataSwiper[] = [
    {
      id: '1',
      img: '',
      url: 'https://picsum.photos/400/120',
    },
    {
      id: '2',
      img: '',
      url: 'https://picsum.photos/400/120',
    },
  ];
  lstFavoriteCards: any[];
  cards: CardShop[] = [
    {
      id: '1',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Baoba Belleza',
      cover:
      'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Baoba Belleza',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      favorite: false,
      categoryName: 'Medicina estética',
      categoryColor: 'category1',
      bonds: [
        {
          id: 'B1',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Masaje',
          subtitle: 'Baoba Belleza',
          desc: 'Masaje relajante de 30 minutos',
          currentCountService: '1',
          award: '1 servicio gratis',
          favorite: false,
          isAdd: false,
          maxCountService: '6',
          stamps: {
            limit: '8',
            complete: '7',
            imgComplete:
              'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
            imgDefault:
              'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
          }
        },
        {
          id: 'B2',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Depilación',
          subtitle: 'Baoba Belleza',
          desc: 'Depilacion con cera caliente y fria, depilacion con hilo, depilacion con azucar, depilacion con laser.',
          currentCountService: '1',
          award: '1 servicio gratis',
          favorite: false,
          isAdd: false,
          maxCountService: '6',
          stamps: {
            limit: '8',
            complete: '7',
            imgComplete:
              'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
            imgDefault:
              'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
          }
        }
      ]
      
    },
    {
      id: '2',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'repsol',
      cover:
      'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'subtitle',
      desc: 'venda de combustible',
      url: '',
      favorite: false,
      categoryName: 'Medicina estética',
      categoryColor: 'category1',
      bonds: [
        {
          id: 'BA1',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Diesel',
          subtitle: 'repsol diesel',
          desc: 'Diesel normal, Diesel plus, Diesel max',
          currentCountService: '1',
          award: '1 servicio gratis',
          favorite: false,
          isAdd: false,
          maxCountService: '6',
          stamps: {
            limit: '8',
            complete: '7',
            imgComplete:
              'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
            imgDefault:
              'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
          }
        }
      ]
    }
    ];

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly navCtrl: NavController
  ) {}

  async ngOnInit() {
    this.lstFavoriteCards = (await this.localStorageService.get(KeyStorage.SHOPFAVORITES)) || [];
      
    await this.localStorageService.set(KeyStorage.SHOPS, this.cards);
  }

  toNavigate(card: CardShop) {
    this.navCtrl.navigateForward(`/details/${card.id}`);
  }
}
