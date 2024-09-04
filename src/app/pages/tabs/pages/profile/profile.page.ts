import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileForm: FormGroup = new FormGroup(
    {
    email: new FormControl('', [Validators.email, Validators.required]),

    dateBirth: new FormControl('', Validators.required),

    phone: new FormControl('',[Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]),
  });

  constructor() { }

  ngOnInit() {
  }

}
