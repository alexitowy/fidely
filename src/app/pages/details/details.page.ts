import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  viewSelected = 'bonds';

  constructor() { }

  ngOnInit() {
  }
  handlerChange(event: any){
    this.viewSelected = event.detail.value;
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
