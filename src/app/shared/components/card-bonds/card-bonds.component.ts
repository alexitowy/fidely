import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardBons } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-card-bonds',
  templateUrl: './card-bonds.component.html',
  styleUrls: ['./card-bonds.component.scss'],
})
export class CardBondsComponent {
@Input() bond: CardBons;
@Output() addBond = new EventEmitter<CardBons>();

  constructor() { }

  actionTouch(): void {
    this.addBond.emit(this.bond);
  }
}
