import { Component } from '@angular/core';
import { FirebaseAuthenticationService } from './core/services/firebase-authentication.service';
import { FirebaseRemoteConfigService } from './core/services/firebase-remote-config.service';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private readonly firebaseAuthenticationService: FirebaseAuthenticationService,
              private readonly firebaseRemoteConfigService: FirebaseRemoteConfigService
  ) {
    this.showSplash();
    this.colorStatusBar('#ffffff');
  }

  private colorStatusBar(color: string) {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color });
    }
  }

  async showSplash(){
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    });
    this.colorStatusBar('#44e0cd');
  }
}
