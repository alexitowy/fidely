import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  async set(key: string, value: any) {
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  }

  async get(key: string) {
    const item = await Preferences.get({ key });
    if (item && item.value) {
      return JSON.parse(item.value as string);
    } else {
      return null;
    }
  }

  async remove(key: string) {
    await Preferences.remove({ key });
  }

  removeItems(key: string[]) {
    key.forEach(async (item) => await this.remove(item));
  }

  async clear() {
    await Preferences.clear();
  }
}
