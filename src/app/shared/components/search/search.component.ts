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
  @Output() filterEvent = new EventEmitter<string[]>();

  countFilter: number = 0;
  data = [
    {
      id: '1',
      name: 'Medicina estética',
      color: 'category1',
      active: false,
    },
    {
      id: '2',
      name: 'Peluqueria',
      categoryColor: 'category2',
      active: false,
    },
    {
      id: '3',
      name: 'Spa',
      categoryColor: 'category2',
      active: false,
    },
    {
      id: '4',
      name: 'Belleza',
      categoryColor: 'category3',
      active: false,
    },
    {
      id: '5',
      name: 'Yoga',
      categoryColor: 'category4',
      active: false,
    },
    {
      id: '6',
      name: 'Otros',
      categoryColor: 'category5',
      active: false,
    },
    {
      id: '7',
      name: 'Salon de uñas',
      categoryColor: 'category1',
      active: false,
    },
    {
      id: '8',
      name: 'Salud',
      categoryColor: 'category2',
      active: false,
    },
    {
      id: '9',
      name: 'Vegano',
      categoryColor: 'category3',
      active: false,
    },
    {
      id: '10',
      name: 'Compras',
      categoryColor: 'category4',
      active: false,
    },
    {
      id: '11',
      name: 'Deporte',
      categoryColor: 'category5',
      active: false,
    },
    {
      id: '12',
      name: 'Servicios para mascotas',
      categoryColor: 'category6',
      active: false,
    },
    {
      id: '13',
      name: 'Pircing',
      categoryColor: 'category7',
      active: false,
    },
    {
      id: '14',
      name: 'Trenzas',
      categoryColor: 'category8',
      active: false,
    },
    {
      id: '15',
      name: 'Otros',
      categoryColor: 'category9',
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
      const filters = this.data.filter(
        (filter) => filter.active).map((item) => item.id)
      this.filterEvent.emit(filters);
    }
  }

  handleInput(event: CustomEvent): void {
    this.search.emit(event.detail.value.trim());
  }
}
