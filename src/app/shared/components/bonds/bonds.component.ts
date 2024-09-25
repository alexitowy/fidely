import { Component, Input, OnInit } from '@angular/core';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { DataCard, EventCardComponent } from 'src/app/core/interfaces/dataCard.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.scss'],
})
export class BondsComponent implements OnInit {
  @Input() shop: DataCard;

  cardsStorage: DataCard[];

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly utilsService: UtilsService
  ) {}

  async ngOnInit() {
    this.cardsStorage =
      (await this.localStorageService.get(KeyStorage.CARDS)) || [];

    this.shop.cards.forEach((item) => {
      this.cardsStorage.forEach((itemStorage) => {
        if (item.id === itemStorage.id) {
          item.addCard = true;
        }
      });
    });
  }

  async addCard(card: EventCardComponent) {
    this.cardsStorage =
      (await this.localStorageService.get(KeyStorage.CARDS)) || [];
    if (card.stamp.addCard) {

      const confirmModal = await this.utilsService.confirmDelete();

      if (confirmModal === true) {
        this.cardsStorage = this.cardsStorage.filter(
          (item) => item.id !== card.card.id
        );
        await this.localStorageService.set(KeyStorage.CARDS, this.cardsStorage);

        this.shop.cards.map((item) => {
          if (item.id === card.card.id) {
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
        this.cardsStorage.push(card.card);
        await this.localStorageService.set(KeyStorage.CARDS, this.cardsStorage);
      }
      this.shop.cards.map((item) => {
        if (item.id === card.card.id) {
          item.addCard = true;
        }
      });
    }
  }
}
