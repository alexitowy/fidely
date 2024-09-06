import { Component, OnInit } from '@angular/core';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { DataCard } from 'src/app/core/interfaces/dataCard.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.scss'],
})
export class BondsComponent implements OnInit {
  cardsStorage: DataCard[];

  cardBackend: DataCard[] = [
    {
      id: '1',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Maderoterapia',
      subtitle: '',
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
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      title: 'Dermatología',
      subtitle: '',
      currentCountService: '1',
      maxCountService: '6',
      award: '1 tratamiento gratis',
      favorite: true,
      categoryName: 'Medicina',
      categoryColor: 'category1',
      stamps: {
        limit: '6',
        complete: '3',
        imgComplete:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-pink.png?alt=media&token=f5f65854-a040-4129-913e-58b91a061a63',
        imgDefault:
          'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Flogo-white.png?alt=media&token=c3f6954e-08ee-4ca1-b0f2-7c3224c1e62f',
      },
    },
  ];

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly utilsService: UtilsService
  ) {}

  async ngOnInit() {
    this.cardsStorage =
      (await this.localStorageService.get(KeyStorage.CARDS)) || [];

    this.cardBackend.forEach((item) => {
      this.cardsStorage.forEach((itemStorage) => {
        if (item.id === itemStorage.id) {
          item.addCard = true;
        }
      });
    });
  }

  async addCard(card: DataCard) {
    this.cardsStorage =
      (await this.localStorageService.get(KeyStorage.CARDS)) || [];
    if (card.addCard) {

      const confirmModal = await this.utilsService.confirmDelete();

      if (confirmModal === true) {
        this.cardsStorage = this.cardsStorage.filter(
          (item) => item.id !== card.id
        );
        await this.localStorageService.set(KeyStorage.CARDS, this.cardsStorage);

        this.cardBackend.map((item) => {
          if (item.id === card.id) {
            item.addCard = false;
          }
        });
        this.utilsService.presentToastSuccess('Tarjeta eliminada con éxito.')
      }
    } else {
      this.utilsService.presentToastSuccess('Tarjeta añadida.');

      if (this.cardsStorage.length === 0) {
        await this.localStorageService.set(KeyStorage.CARDS, [card]);
      } else {
        this.cardsStorage.push(card);
        await this.localStorageService.set(KeyStorage.CARDS, this.cardsStorage);
      }
      this.cardBackend.map((item) => {
        if (item.id === card.id) {
          item.addCard = true;
        }
      });
    }
  }
}
