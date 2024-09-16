import { Component } from '@angular/core';
import { FirebaseAuthenticationService } from './core/services/firebase-authentication.service';
import { FirebaseRemoteConfigService } from './core/services/firebase-remote-config.service';
import { environment } from 'src/environments/environment';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private readonly firebaseAuthenticationService: FirebaseAuthenticationService,
              private readonly firebaseRemoteConfigService: FirebaseRemoteConfigService
  ) {
    console.log(`environment ${environment.name} V ${packageJson.version}`);
  }
}
