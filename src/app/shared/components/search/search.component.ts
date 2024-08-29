import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFiltersComponent } from '../modal-filters/modal-filters.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  countFilter = 0;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalFiltersComponent, componentProps:{filters:[
        {
          name:'Peluquería',
          active: false,
        },
        {
          name:'Barbería',
          active: true,
        },
        {
          name:'Salón de uñas',
          active: false,
        },
        {
          name:'Depilación',
          active: false,
        },
        {
          name:'Cejas y pestañas',
          active: false,
        },
        {
          name:'Cuidado de la piel',
          active: false,
        },
        {
          name:'Masajes',
          active: true,
        },
        {
          name:'Maquillaje',
          active: false,
        },
        {
          name:'Spa',
          active: false,
        },
        {
          name:'Tienda de tatuajes',
          active: false,
        },
        {
          name:'Medicina estética',
          active: false,
        },
        {
          name:'Servicios para mascotas',
          active: false,
        },
        {
          name: 'Pircing',
          active: false,
        },
        {
          name:'Trenzas',
          active: false,
        },
        {
          name:'Otros',
          active: false,
        }
      ]}
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
     data.forEach(filter => {
       if(filter.active === true){
        this.countFilter++ ;
       }
     });

    }
  }
}
