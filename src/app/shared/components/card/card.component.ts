import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataCard } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() showIcons: boolean = true;
  @Input() iconAdd: boolean = false;
  @Input() card: DataCard;

  @Output() action = new EventEmitter<DataCard>();

  isOpen = false;
  classStamps = 'card-content-seal-3';
  stamps = [];

  constructor(
    private readonly navCtrl: NavController
  ) {}

  ngOnInit(): void {
    if (this.showIcons) {
      this.classStamps = this.getClass();
      for (let index = 1; index <= +this.stamp?.limit; index = index + 1) {
        if (index <= +this.stamp.complete) {
          this.stamps?.push({ img: this.stamp?.imgComplete });
        } else {
          this.stamps?.push({ img: this.stamp?.imgDefault });
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

  getClass() {
    console.log(this.stamp);
    console.log(this.card);


    if (+this.stamp?.limit === 6) {
      return 'card-content-seal-3';
    } else if (+this.stamp?.limit === 8) {
      return 'card-content-seal-4';
    } else {
      return 'card-content-seal-5';
    }
  }

  actionTouch() {
    this.action.emit({card: this.card, stamp: this.stamp});
  }
}
