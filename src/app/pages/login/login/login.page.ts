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
    //this.buildForm();
  }

  /* buildForm() {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  } */

  onSubmit(){

  }
}
