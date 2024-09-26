import { Component, Input, OnInit } from '@angular/core';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent  implements OnInit {
  @Input() shop: CardShop;
  clocks = [
    {
      day: 'Lunes',
      time: '10:00-21:00'
    },
    {
      day: 'Martes',
      time: '10:00-21:00'
    },
    {
      day: 'Miércoles',
      time: '10:00-21:00'
    },
    {
      day: 'Jueves',
      time: '10:00-21:00'
    },
    {
      day: 'Viernes',
      time: '10:00-21:00'
    },
    {
      day: 'Sábado',
      time: '12:00-20:00'
    },
    {
      day: 'Domingo',
      time: 'Cerrado'
    },
  ]

  constructor() { }

  ngOnInit() {
    console.log();
    
  }

}
