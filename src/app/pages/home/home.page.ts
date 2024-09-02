import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataCard } from 'src/app/core/interfaces/dataCard.interface';
import { FirebaseAuthenticationService } from 'src/app/core/services/firebase-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cards = [];

  cardsService: DataCard[] = [
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Maderoterapia',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 tratamiento gratis',
      favorite: true,
      categoryName: 'Medicina estética',
      categoryColor: 'category1',
      stamps: {
        limit: '8',
        complete: '2',
        imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      }
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Corte',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Barbería',
      categoryColor: 'category2',
      stamps: {
        limit: '8',
        complete: '7',
        imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      }
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Alisado',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: true,
      categoryName: 'Peluquería',
      categoryColor: 'category3',
      stamps: {
        limit: '8',
        complete: '8',
        imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      }
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Estética',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Salón de uñas',
      categoryColor: 'category4',
      stamps: {
        limit: '6',
        complete: '3',
        imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      }
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Limpieza Facial',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: true,
      categoryName: 'Cuidado de la piel',
      categoryColor: 'category5',
      stamps: {
        limit: '10',
        complete: '6',
        imgComplete: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      }
    }
  ];
  cardsStores = [
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Baoba Belleza',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 tratamiento gratis',
      categoryName: 'Medicina estética',
      categoryColor: 'category1',
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Brave tradicional',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      categoryName: 'Barbería',
      categoryColor: 'category2',
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Zaccha',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      categoryName: 'Peluquería',
      categoryColor: 'category3',
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Nails Beauty',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      categoryName: 'Salón de uñas',
      categoryColor: 'category4',
    },
    {
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Starbella',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      categoryName: 'Cuidado de la piel',
      categoryColor: 'category5',
    }
  ];

  viewSelected = 'stores';

  constructor(
    private readonly firebaseAuthService: FirebaseAuthenticationService,
    private readonly navCtr: NavController) { }

  ngOnInit() {
    this.cards = this.cardsStores;

  }

  async logOut(){
    await this.firebaseAuthService.signOut();
    this.navCtr.navigateRoot('/login');

  }

  handlerChange(event: any){

    this.viewSelected = event.detail.value;
    console.log(this.viewSelected);
    if(this.viewSelected === 'stores'){
      this.cards = this.cardsStores;
    } else {
     this.cards = this.cardsService;
    }

  }
}
