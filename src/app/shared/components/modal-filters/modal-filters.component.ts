import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-filters',
  templateUrl: './modal-filters.component.html',
  styleUrls: ['./modal-filters.component.scss'],
})
export class ModalFiltersComponent  implements OnInit {

  @Input() filters: any [];
  filtersCopy: any [] ;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.filtersCopy = JSON.parse(JSON.stringify(this.filters));

  }

  touchFilter(filter: any): void {
   filter.active = !filter.active;
  }
  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(): Promise<boolean> {
    return this.modalCtrl.dismiss(this.filtersCopy, 'confirm');
  }
  clear(): void {
    this.filtersCopy.forEach(filter => filter.active = false);
  }
}
