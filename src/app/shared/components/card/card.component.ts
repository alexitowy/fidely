import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{

  @Input() showIcons: boolean = true;
  @Input() card: any;

  isOpen = false;

  classStamps = 'card-content-seal-3';
  stamps = [];

  constructor() {}

  ngOnInit(): void {
    if(this.showIcons){
      this.classStamps = this.getClass();
      for (let index = 1; index <= +this.card.stamps.limit; index=index+1) {
        if(index <= +this.card.stamps.complete){
          this.stamps.push({ img:this.card.stamps.imgComplete});
        } else{
          this.stamps.push({ img:this.card.stamps.imgDefault});
        }
      }
    }
  }

  setOpen() {
    this.isOpen = !this.isOpen;
  }

  setFavorite() {
    this.card.favorite = !this.card.favorite;
  }

  getClass(){
    console.log('Hola');

    if(+this.card.stamps.limit === 6){
      return 'card-content-seal-3';
    } else if(+this.card.stamps.limit === 8){
      return 'card-content-seal-4';
    } else {
      return 'card-content-seal-5';
    }
  }
}
