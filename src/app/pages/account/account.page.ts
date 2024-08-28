import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  optionsAccount = [
    {
      img: 'assets/user.png',
      text: 'Datos personales',
      url: '/tabs/profile'
    },
    {
      img: 'assets/card.png',
      text: 'Mis tarjetas',
      url: ''
    },
    {
      img: 'assets/terms.png',
      text: 'Aviso legal',
      url: ''
    },
    {
      img: 'assets/terms.png',
      text: 'Términos y condiciones',
      url: ''
    },
    {
      img: 'assets/help.png',
      text: 'Ayuda',
      url: ''
    },
    {
      img: 'assets/go.png',
      text: 'Cerrar sesión',
      url: ''
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
