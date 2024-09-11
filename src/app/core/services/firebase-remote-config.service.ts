import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { FirebaseRemoteConfig } from '@capacitor-firebase/remote-config';
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';
import { initializeApp } from 'firebase/app';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRemoteConfigService {
  private remoteConfig: any;

  constructor(private readonly platform: Platform) {
    this.initializeRemoteConfig();
  }

  private async initializeRemoteConfig(): Promise<void> {
    if (this.platform.is('capacitor')) {
      // Para dispositivos móviles usa el plugin de Capacitor
      await FirebaseRemoteConfig.fetchAndActivate();
    } else {
      // Para web, usa el SDK de Firebase
      const firebaseApp = initializeApp(environment.firebase);
      this.remoteConfig = getRemoteConfig(firebaseApp);
      this.remoteConfig.settings = { minimumFetchIntervalMillis: 360000 }; 
      await fetchAndActivate(this.remoteConfig);
    }
  }

  public async getValueString(key: string): Promise<string> {
    if (this.platform.is('capacitor')) {
      // Obtener valor usando el plugin en móviles
      const value = await FirebaseRemoteConfig.getString({ key });
      return value.value;
    } else {
      // Obtener valor usando el SDK en la web
      const value = getValue(this.remoteConfig, key);
      return value.asString();
    }
  }

  public async getValueBoolean(key: string): Promise<boolean> {
    if (this.platform.is('capacitor')) {
      // Obtener valor usando el plugin en móviles
      const value = await FirebaseRemoteConfig.getBoolean({ key });
      return value.value;
    } else {
      // Obtener valor usando el SDK en la web
      const value = getValue(this.remoteConfig, key);
      return value.asBoolean();
    }
  }

  public async getValueNumber(key: string): Promise<number> {
    if (this.platform.is('capacitor')) {
      // Obtener valor usando el plugin en móviles
      const value = await FirebaseRemoteConfig.getNumber({ key });
      return value.value;
    } else {
      // Obtener valor usando el SDK en la web
      const value = getValue(this.remoteConfig, key);
      return value.asNumber();
    }
  }

  

}
