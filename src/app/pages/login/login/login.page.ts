import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router:Router) { }

  ngOnInit(){}

  onSubmit(){}

  send(){
    console.log(this.loginForm);
  }

  goToForgotPage(){
    this.router.navigate(['/forgot-password']);
  }

  async loginWithGoogle(){
    const result = await FirebaseAuthentication.signInWithGoogle();
    console.log(result)
    return result.user;
  };
}
