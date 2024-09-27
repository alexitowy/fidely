import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardBons } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-card-bonds',
  templateUrl: './card-bonds.component.html',
  styleUrls: ['./card-bonds.component.scss'],
})
export class CardBondsComponent  implements OnInit {
@Input() bond: CardBons;
@Output() addBond = new EventEmitter<CardBons>();

  constructor() { }

  ngOnInit() {
    console.log('bond component', this.bond);
    
  }

  actionTouch() {
    this.addBond.emit(this.bond);
  }
}
