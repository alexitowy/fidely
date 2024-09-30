import { Component, Input} from '@angular/core';
import { NavController } from '@ionic/angular';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent{
  @Input() card: CardShop;

  constructor(
    private readonly navCtrl: NavController
  ) {}

  toNavigate(){
    this.navCtrl.navigateForward(`/tabs/details/${this.card.id}`);
  }
}
