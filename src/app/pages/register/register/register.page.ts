import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    confirmEmail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$')]),
    terms: new FormControl(null, Validators.requiredTrue)
  });

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.registerForm);
  }

  checkValidationMinLength(){
    const value =  this.registerForm.controls['password'].value;
   //console.log(value.length);
    //if(value.length >= 6 && value.length <= 10)
      //console.log(true);
    ;
  }
}
