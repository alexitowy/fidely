import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-modal-filters',
  templateUrl: './modal-filters.component.html',
  styleUrls: ['./modal-filters.component.scss'],
})
export class ModalFiltersComponent  implements OnInit {

  @Input() filters: any [];
  filtersCopy: any [] ;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.filtersCopy = JSON.parse(JSON.stringify(this.filters));

  }

  touchFilter(filter: any){
   filter.active = !filter.active;
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.filtersCopy, 'confirm');
  }
  clear(){
    this.filtersCopy.forEach(filter => filter.active = false);
  }
}
