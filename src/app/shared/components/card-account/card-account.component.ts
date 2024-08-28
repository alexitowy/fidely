import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss'],
})
export class CardAccountComponent  implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {}

}
