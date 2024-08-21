import { Component } from '@angular/core';
import { FirebaseAuthenticationService } from './core/services/firebase-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private readonly firebaseAuthenticationService: FirebaseAuthenticationService) {
    firebaseAuthenticationService.initialize().then((data) => {
      console.log(data);
    });
  }
}
