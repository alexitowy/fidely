import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  isToastOpen = false;

  constructor() { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean){
    this.isToastOpen = isOpen;
  }
}
