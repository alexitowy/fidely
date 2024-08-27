import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  viewSelected = 'overview';

  constructor() { }

  ngOnInit() {
  }


  handlerChange(event: any){
    this.viewSelected = event.detail.value;
    console.log(this.viewSelected);
  }
}
