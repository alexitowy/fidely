import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardBonds } from 'src/app/core/interfaces/cardBond.interface';


@Component({
  selector: 'app-card-bonds',
  templateUrl: './card-bonds.component.html',
  styleUrls: ['./card-bonds.component.scss'],
})
export class CardBondsComponent {
@Input() bond: CardBonds;
@Output() addBond = new EventEmitter<CardBonds>();

  constructor() { }

  actionTouch(): void {
    this.addBond.emit(this.bond);
  }
}
