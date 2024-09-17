import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  viewSelected = 'bonds';

  shop = {
    id:'1',
    favorite: false,
    cover: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/fondoBaoba.webp?alt=media&token=44847806-40ef-48bf-806d-556c1143dd12',
    logo: 'https://www.baobabelleza.com/wp-content/uploads/2018/10/Logo_home160x160.png',
    name: 'Baoba Belleza',
    category: 'Medicina estética',
  }

  constructor() { }

  ngOnInit() {
    // TODO aquí recuperar el listado de empresas favoritas del localstorage
    // para por el id que tenemos en la variable shop poder hacer un match con las que vienen de local storage 
    // y poder decir si esta en el listado de favoritas del localstorage entonces a sho.favorite le cambio el valor a true caso contrario lo dejo en false
  }
  handlerChange(event: any){
    this.viewSelected = event.detail.value;
  }

  toogleFavorite(){
    //TODO aquí hacer la logica del favorito que no esta
  }

  async share(){
     await Share.share({
      title: 'test',
      text: 'test',
      url: 'https://maps.app.goo.gl/KnEHFvo8GiyVDgNn7',
      dialogTitle: 'testing'
    });
  }
}
