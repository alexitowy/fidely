import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';
import { DataSwiper } from 'src/app/core/interfaces/dataSwiper.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ModalQrComponent } from 'src/app/shared/components/modal-qr/modal-qr.component';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.page.html',
  styleUrls: ['./view-search.page.scss'],
})
export class ViewSearchPage {
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
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Baoba Belleza',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España. Céntro Médico Estético de referencia en pleno corazón de la capital de España. Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      favorite: false,
      categoryName: 'Medicina estética',
      categoryColor: 'category1',
      categoryId: '1',
      bonds: [
        {
          id: 'B1',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Masaje',
          subtitle: '',
          desc: 'Masaje relajante de 30 minutos',
          currentCountService: '1',
          award: '1 servicio gratis',
          favorite: false,
          isAdd: false,
          maxCountService: '6',
          categoryId: '1',
          stamps: {
            limit: '8',
            complete: '7',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f'
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
          categoryId: '1',
          stamps: {
            limit: '8',
            complete: '7',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f'
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '2',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Zaccha',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Alisado',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      favorite: false,
      categoryName: 'Peluqueria',
      categoryColor: 'category2',
      categoryId: '2',
      bonds: [
        {
          id: 'BA1',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Corte',
          subtitle: '',
          desc: 'Corte de pelo para señora',
          currentCountService: '1',
          award: '1 servicio gratis',
          favorite: false,
          isAdd: false,
          maxCountService: '6',
          categoryId: '2',
          stamps: {
            limit: '8',
            complete: '7',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f'
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '3',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Wellness Spa',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Relax y cuidado',
      desc: 'Spa urbano especializado en tratamientos de relajación y bienestar.',
      url: '',
      favorite: false,
      categoryName: 'Spa',
      categoryColor: 'category2',
      categoryId: '3',
      bonds: [
        {
          id: 'B2',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Circuito Termal',
          subtitle: '',
          desc: 'Acceso a nuestro circuito termal durante 2 horas.',
          currentCountService: '2',
          award: '1 entrada gratuita',
          favorite: false,
          isAdd: false,
          maxCountService: '5',
          categoryId: '3',
          stamps: {
            limit: '7',
            complete: '4',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-blue.png?alt=media&token=complete123',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-gray.png?alt=media&token=default123',
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '4',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Green Beauty',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Cosmética natural',
      desc: 'Tienda de cosmética natural y ecológica.',
      url: '',
      favorite: false,
      categoryName: 'Belleza',
      categoryColor: 'category3',
      categoryId: '4',
      bonds: [
        {
          id: 'B3',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Facial orgánico',
          subtitle: '',
          desc: 'Tratamiento facial con productos 100% naturales.',
          currentCountService: '3',
          award: '1 sesión gratuita',
          favorite: false,
          isAdd: false,
          maxCountService: '4',
          categoryId: '4',
          stamps: {
            limit: '6',
            complete: '5',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-green.png?alt=media&token=complete124',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=default124',
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '5',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Mindful Yoga',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Bienestar mental y físico',
      desc: 'Centro de yoga especializado en clases para todos los niveles.',
      url: '',
      favorite: false,
      categoryName: 'Yoga',
      categoryColor: 'category4',
      categoryId: '5',
      bonds: [
        {
          id: 'B4',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Clase de Yoga',
          subtitle: '',
          desc: 'Clase de yoga grupal de 1 hora.',
          currentCountService: '4',
          award: '1 clase gratuita',
          favorite: false,
          isAdd: false,
          maxCountService: '10',
          categoryId: '5',
          stamps: {
            limit: '10',
            complete: '8',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=complete125',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=default125'
          }
        }
      ], gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '6',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'FitClub',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Fitness y salud',
      desc: 'Gimnasio con equipamiento de última generación y entrenadores personales.',
      url: '',
      favorite: false,
      categoryName: 'Otros',
      categoryColor: 'category5',
      categoryId: '6',
      bonds: [
        {
          id: 'B5',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Sesión de Entrenamiento',
          subtitle: '',
          desc: 'Sesión de entrenamiento personalizado.',
          currentCountService: '3',
          award: '1 sesión gratuita',
          favorite: false,
          isAdd: false,
          maxCountService: '12',
          categoryId: '6',
          stamps: {
            limit: '15',
            complete: '10',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-orange.png?alt=media&token=complete126',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-black.png?alt=media&token=default126'
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '7',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Luxe Salon',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Estética y Peluquería',
      desc: 'Salón de belleza con tratamientos exclusivos de peluquería y estética.',
      url: '',
      favorite: false,
      categoryName: 'Salon de uñas',
      categoryColor: 'category1',
      categoryId: '7',
      bonds: [
        {
          id: 'B6',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Corte de Pelo',
          subtitle: '',
          desc: 'Corte de pelo personalizado con productos premium.',
          currentCountService: '2',
          award: '1 corte gratuito',
          favorite: false,
          isAdd: false,
          maxCountService: '8',
          categoryId: '7',
          stamps: {
            limit: '10',
            complete: '6',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-blue.png?alt=media&token=complete127',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=default127'
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '8',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'HealthyLife',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Nutrición y Dietética',
      desc: 'Consultoría de nutrición y dietética para mejorar tu salud.',
      url: '',
      favorite: false,
      categoryName: 'Salud',
      categoryColor: 'category2',
      categoryId: '8',
      bonds: [
        {
          id: 'B7',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Plan de Dieta',
          subtitle: '',
          desc: 'Plan personalizado de dieta saludable.',
          currentCountService: '1',
          award: '1 consulta gratuita',
          favorite: false,
          isAdd: false,
          maxCountService: '5',
          categoryId: '8',
          stamps: {
            limit: '6',
            complete: '5',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-green.png?alt=media&token=complete128',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=default128'
          }
        }
      ], gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '9',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Vegan Delight',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Comida vegana',
      desc: 'Restaurante vegano especializado en alimentos orgánicos.',
      url: '',
      favorite: false,
      categoryName: 'Vegano',
      categoryColor: 'category3',
      categoryId: '9',
      bonds: [
        {
          id: 'B8',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Menú vegano',
          subtitle: '',
          desc: 'Menú degustación vegano de 3 platos.',
          currentCountService: '3',
          award: '1 menú gratuito',
          favorite: false,
          isAdd: false,
          maxCountService: '7',
          categoryId: '9',
          stamps: {
            limit: '8',
            complete: '6',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=complete129',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=default129'
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '10',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'EcoShop',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Productos sostenibles',
      desc: 'Tienda de productos ecológicos y sostenibles para el hogar.',
      url: '',
      favorite: false,
      categoryName: 'Compras',
      categoryColor: 'category4',
      categoryId: '10',
      bonds: [
        {
          id: 'B9',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Producto ecológico',
          subtitle: '',
          desc: 'Compra de productos ecológicos con descuento.',
          currentCountService: '2',
          award: '1 producto gratuito',
          favorite: false,
          isAdd: false,
          maxCountService: '6',
          categoryId: '10',
          stamps: {
            limit: '8',
            complete: '5',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-green.png?alt=media&token=complete130',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=default130'
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    },
    {
      id: '11',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'PowerGym',
      cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Entrenamiento de alto rendimiento',
      desc: 'Gimnasio especializado en entrenamiento funcional de alta intensidad.',
      url: '',
      favorite: false,
      categoryName: 'Deporte',
      categoryColor: 'category5',
      categoryId: '11',
      bonds: [
        {
          id: 'B10',
          icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
          title: 'Sesión de Crossfit',
          subtitle: '',
          desc: 'Entrenamiento funcional en grupo.',
          currentCountService: '4',
          award: '1 sesión gratuita',
          favorite: false,
          isAdd: false,
          maxCountService: '10',
          categoryId: '11',
          stamps: {
            limit: '10',
            complete: '7',
            imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-blue.png?alt=media&token=complete131',
            imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=default131'
          }
        }
      ],
      gallery: [
        {
          id: '1',
          img: '',
          url: 'https://picsum.photos/400/120'
        },
        {
          id: '2',
          img: '',
          url: 'https://picsum.photos/400/120'
        }
      ]
    }
  ];
  cardsView: CardShop[] = [];
  noResults: boolean;
  filters: string[] = [];
  wordSearch: string = '';

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly navCtrl: NavController,
    private readonly router: Router,
    private readonly modalCtrl: ModalController
  ) { }

  async ionViewWillEnter(): Promise<void> {
    this.lstFavoriteCards = (await this.localStorageService.get(KeyStorage.SHOPFAVORITES)) || [];

    await this.localStorageService.set(KeyStorage.SHOPS, this.cards);
    this.cardsView = [...this.cards];
  }

  toNavigate(card: CardShop): void {
    this.router.navigate([`/tabs/details/${card.id}`]);
  }

  async openQr(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalQrComponent,
      id: 'modalQr'
    }
    )
    modal.present();
  }

  search(wordSearch: string): void {
    if (typeof wordSearch === 'string') {
      this.wordSearch = wordSearch;
      if (wordSearch === '') {
        if (this.filters.length > 0) {
          this.filterCategory();
        } else {
          this.cardsView = [...this.cards];
        }
        this.noResults = this.cardsView.length === 0;
      } else {
        if (this.filters.length > 0) {
          this.filterCategory();
          this.cardsView = this.cardsView.filter((card: CardShop) => {
            return card.title.toLocaleLowerCase().includes(wordSearch.toLocaleLowerCase());
          });
        } else {
          this.cardsView = this.cards.filter((card: CardShop) => {
            return card.title.toLocaleLowerCase().includes(wordSearch.toLocaleLowerCase());
          });
        }
        this.noResults = this.cardsView.length === 0;
      }
    }
  }

  private filterCategory() {
    this.cardsView = this.cards.filter((card: CardShop) => {
      return this.filters.includes(card.categoryId);
    });
  }

  filterEvent(event: string[]) {
    this.filters = event;
    if (this.filters.length > 0) {
      this.filterCategory();
      if (this.wordSearch !== '') {
        this.cardsView = this.cardsView.filter((card: CardShop) => {
          return card.title.toLocaleLowerCase().includes(this.wordSearch.toLocaleLowerCase());
        });
      }
    } else {
      if(this.wordSearch !== '') {
        this.cardsView = this.cards.filter((card: CardShop) => {
          return card.title.toLocaleLowerCase().includes(this.wordSearch.toLocaleLowerCase());
        });
      } else {
        this.cardsView = [...this.cards];
      }
    }
    this.noResults = this.cardsView.length === 0;
  }
}
