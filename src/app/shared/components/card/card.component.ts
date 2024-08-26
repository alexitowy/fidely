import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() showIcons: boolean = true;
  @Input() card: any;

  isOpen = false;

  constructor() {}

  setOpen() {
    this.isOpen = !this.isOpen;
  }

  setFavorite() {
    this.card.favorite = !this.card.favorite;
  }

  getRange(start: number, end: number) {
    const result = [];
    for (let index = start; index <= end; index++) {
      result.push(index);
    }
    return result;
  }

  getClass(){
    if(+this.card.stamps.limit === 6){
      return 'card-content-seal-3';
    } else if(+this.card.stamps.limit === 8){
      return 'card-content-seal-4';
    } else {
      return 'card-content-seal-5';
    }
  }
}
