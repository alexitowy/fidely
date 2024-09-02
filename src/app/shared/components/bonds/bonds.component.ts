import { Component, OnInit } from '@angular/core';
import { DataCard } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.scss'],
})
export class BondsComponent  implements OnInit {

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
    }
  ]

  constructor() { }

  ngOnInit() {}

}
