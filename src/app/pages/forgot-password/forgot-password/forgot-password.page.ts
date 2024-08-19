import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  isToastOpen = false;

  forgotForm: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.email, Validators.required])
  })

  constructor() { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean){
    this.isToastOpen = isOpen;
  }
}
