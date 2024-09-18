import { Component, Input} from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataCardInfo } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent{
  @Input() card: DataCardInfo;

  constructor(
    private readonly navCtrl: NavController
  ) {}

  toNavigate(){
    this.navCtrl.navigateForward(`/details/${this.card.id}`);
  }
}
