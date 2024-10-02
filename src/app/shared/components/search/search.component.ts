import { Component, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFiltersComponent } from '../modal-filters/modal-filters.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  countFilter: number = 0;
  data = [
    {
      name: 'Peluquería',
      active: false,
    },
    {
      name: 'Barbería',
      active: false,
    },
    {
      name: 'Salón de uñas',
      active: false,
    },
    {
      name: 'Depilación',
      active: false,
    },
    {
      name: 'Cejas y pestañas',
      active: false,
    },
    {
      name: 'Cuidado de la piel',
      active: false,
    },
    {
      name: 'Masajes',
      active: false,
    },
    {
      name: 'Maquillaje',
      active: false,
    },
    {
      name: 'Spa',
      active: false,
    },
    {
      name: 'Tienda de tatuajes',
      active: false,
    },
    {
      name: 'Medicina estética',
      active: false,
    },
    {
      name: 'Servicios para mascotas',
      active: false,
    },
    {
      name: 'Pircing',
      active: false,
    },
    {
      name: 'Trenzas',
      active: false,
    },
    {
      name: 'Otros',
      active: false,
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  async openModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalFiltersComponent,
      componentProps: {
        filters: this.data
      },
      id: 'modalFilters'
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.data = data;
      this.countFilter = 0;
      data.forEach(filter => {
        if (filter.active === true) {
          this.countFilter++;
        }
      });

    }
  }

  handleInput(event: CustomEvent): void {
    this.search.emit(event.detail.value.trim());
  }
}
