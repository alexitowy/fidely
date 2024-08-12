import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /* loginForm!: FormGroup; */

  constructor() { }

  ngOnInit() {
  }

  /* buildForm() {
    this.loginForm = new FormGroup({
      user: new FormControl({}),
    })
  } */

  onSubmit(){

  }
}
