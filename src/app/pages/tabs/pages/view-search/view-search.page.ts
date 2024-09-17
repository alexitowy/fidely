import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from 'src/app/core/interfaces/dataCard.interface';
import { DataSwiper } from 'src/app/core/interfaces/dataSwiper.interface';



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
    autoHeight: true
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
    }
  ];

  // TODO esta es tu variable de empresas favoritas que debes llenar con lo que te venga de localstorage
  lstFavoriteCards = [
    {
      id: '1',
      name: 'Baoba Belleza',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
    },
    {
      id: '2',
      name: 'Baoba Belleza',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
    },
    {
      id: '3',
      name: 'Baoba Belleza',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
    },
    {
      id: '4',
      name: 'Baoba Belleza',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
    },
    {
      id: '5',
      name: 'Baoba Belleza',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
    },
  ];


  cards: DataCard[] = [
    {
      id: '1',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Maderoterapia',
      subtitle: 'Baoba Belleza',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 tratamiento gratis',
      favorite: true,
      categoryName: 'Medicina estética',
      categoryColor: 'category1',
      stamps: {
        limit: '8',
        complete: '2',
        imgComplete:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      },
    },
    {
      id: '2',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Corte',
      subtitle: 'Brave tradicional',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Barbería',
      categoryColor: 'category2',
      stamps: {
        limit: '8',
        complete: '7',
        imgComplete:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      },
    },
    {
      id: '3',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Alisado',
      subtitle: 'Zaccha',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: true,
      categoryName: 'Peluquería',
      categoryColor: 'category3',
      stamps: {
        limit: '8',
        complete: '8',
        imgComplete:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      },
    },
    {
      id: '4',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Fimage-regular.svg?alt=media&token=19e15e71-c6f8-4754-888b-816c834f4628',
      title: 'Estética',
      subtitle: 'Nails Beauty',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: false,
      categoryName: 'Salón de uñas',
      categoryColor: 'category4',
      stamps: {
        limit: '6',
        complete: '3',
        imgComplete:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      },
    },
    {
      id: '5',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Limpieza Facial',
      subtitle: 'Starbella',
      desc: 'Céntro Médico Estético de referencia en pleno corazón de la capital de España.',
      url: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 servicio gratis',
      favorite: true,
      categoryName: 'Cuidado de la piel',
      categoryColor: 'category5',
      stamps: {
        limit: '10',
        complete: '6',
        imgComplete:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
    // TODO aqui recuperar el listado de empresas favoritas y asignarla a tu variable local para mostrarlas 
  }

}
