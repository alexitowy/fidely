import { Component, Input, OnInit } from '@angular/core';
import { KeyStorage } from 'src/app/core/enums/localStorage.enum';
import { CardBons, CardShop } from 'src/app/core/interfaces/dataCard.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.scss'],
})
export class BondsComponent implements OnInit {
  @Input() shop: CardShop;
  
  cardsStorage: CardBons[];


  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly utilsService: UtilsService
  ) {}

  async ngOnInit():  Promise<void> {
    this.cardsStorage = (await this.localStorageService.get(KeyStorage.BONDS)) || [];

    this.shop.bonds.forEach((item) => {
      const bond = this.cardsStorage.find((itemStorage) => itemStorage.id === item.id);
      if (bond) {
        item.isAdd = true;
      }
    });
  }

  async addCard(bond: any):  Promise<void> {
    this.cardsStorage = (await this.localStorageService.get(KeyStorage.BONDS)) || [];
    if (bond.isAdd) {
      const confirmModal = await this.utilsService.confirmDelete('¿Quieres eliminar la tarjeta?');
      if (confirmModal) {
        this.cardsStorage = this.cardsStorage.filter(
          (item) => item.id !== bond.id
        );
        await this.localStorageService.set(KeyStorage.BONDS, this.cardsStorage);
        this.shop.bonds.map((item) => {
          if (item.id === bond.id) {
            item.isAdd = false;
          }
        });
        this.utilsService.presentToastSuccess('Tarjeta eliminada con éxito.')
      }
    } else {
      this.utilsService.presentToastSuccess('Tarjeta añadida.');
      if (this.cardsStorage.length === 0) {
        await this.localStorageService.set(KeyStorage.BONDS, [bond]);
      } else {
        this.cardsStorage.push(bond);
        await this.localStorageService.set(KeyStorage.BONDS, this.cardsStorage);
      }
      this.shop.bonds.map((item) => {
        if (item.id === bond.id) {
          item.isAdd = true;
        }
      });
    }
  }
}
