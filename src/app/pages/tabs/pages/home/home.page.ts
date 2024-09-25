import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import {
  DataCard,
  EventCardComponent,
} from 'src/app/core/interfaces/dataCard.interface';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  favoriteCards: DataCard[];
  cards: DataCard[] = [
    {
      id: '1',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Maderoterapia',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Baoba Belleza',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 tratamiento gratis',
      favorite: false,
      categoryName: 'Medicina estética',
      categoryColor: 'category1',
      cards: [
        {
          id: '1',
          limit: '8',
          complete: '2',
          imgComplete:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
          imgDefault:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
        },
      ],
      gallery: [
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/pestanas_lifting_3D-300x300-1.png',
        },
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/manicura-_-unas-gel-acrilico-300x300-1.jpg',
        },
      ],
    },
    {
      id: '2',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Corte',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Brave tradicional',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Barbería',
      categoryColor: 'category2',
      cards: [
        {
          id: '2',
          limit: '8',
          complete: '7',
          imgComplete:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
          imgDefault:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
        },
      ],
      gallery: [
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/pestanas_lifting_3D-300x300-1.png',
        },
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/manicura-_-unas-gel-acrilico-300x300-1.jpg',
        },
      ],
    },
    {
      id: '3',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Alisado',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Zaccha',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Peluquería',
      categoryColor: 'category3',
      cards: [
        {
          id: '3',
          limit: '8',
          complete: '8',
          imgComplete:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
          imgDefault:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
        },
      ],
      gallery: [
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/pestanas_lifting_3D-300x300-1.png',
        },
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/manicura-_-unas-gel-acrilico-300x300-1.jpg',
        },
      ],
    },
    {
      id: '4',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Estética',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Nails Beauty',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Salón de uñas',
      categoryColor: 'category4',
      cards: [
        {
          id: '4',
          limit: '6',
          complete: '3',
          imgComplete:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
          imgDefault:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
        },
      ],
      gallery: [
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/pestanas_lifting_3D-300x300-1.png',
        },
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/manicura-_-unas-gel-acrilico-300x300-1.jpg',
        },
      ],
    },
    {
      id: '5',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Limpieza Facial',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
      subtitle: 'Starbella',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Cuidado de la piel',
      categoryColor: 'category5',
      cards: [
        {
          id: '5',
          limit: '10',
          complete: '6',
          imgComplete:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
          imgDefault:
            'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
        },
      ],
      gallery: [
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/pestanas_lifting_3D-300x300-1.png',
        },
        {
          id: '',
          img: 'Baoba',
          url: 'https://www.baobabelleza.com/wp-content/uploads/2024/06/manicura-_-unas-gel-acrilico-300x300-1.jpg',
        },
      ],
    },
  ];
  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly navCtr: NavController,
    private readonly localStorageService: LocalStorageService
  ) {}
  async ngOnInit() {
    this.favoriteCards =
      (await this.localStorageService.get(KeyStorage.FAVORITE)) || [];
    if (this.favoriteCards.length > 0) {
      this.cards.forEach((card) => {
        const favoriteCard = this.favoriteCards.find(
          (favCard) => favCard.id === card.id
        );
        if (favoriteCard !== undefined) {
          card.favorite = true;
        }
      });
    }
  }
  async logOut() {
    await this.firebaseAuthService.signOut();
    this.navCtr.navigateRoot('/login');
  }
  async touchFavCard({ card }: EventCardComponent) {
    this.favoriteCards =
      (await this.localStorageService.get(KeyStorage.FAVORITE)) || [];
    if (card.favorite === true) {
      card.favorite = false;
      this.favoriteCards = this.favoriteCards.filter(
        (favCard) => favCard.id !== card.id
      );
    } else {
      card.favorite = true;
      this.favoriteCards.push(card);
    }
    await this.localStorageService.set(KeyStorage.FAVORITE, this.favoriteCards);
  }
}
