import { Injectable, NgZone } from '@angular/core';
import {
    FirebaseAuthentication,
    GetIdTokenOptions,
    SignInResult,
    User
} from '@capacitor-firebase/authentication';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Observable, ReplaySubject, lastValueFrom, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthenticationService {
  private currentUserSubject = new ReplaySubject<User | null>(1);

  constructor(
    private readonly platform: Platform,
    private readonly ngZone: NgZone,
  ) {
    FirebaseAuthentication.removeAllListeners().then(() => {
      FirebaseAuthentication.addListener('authStateChange', (change) => {
        this.ngZone.run(() => {
          this.currentUserSubject.next(change.user);
        });
      });
    });
    // Only needed to support dev livereload.
    FirebaseAuthentication.getCurrentUser().then((result) => {
      this.currentUserSubject.next(result.user);
    });
  }

  public get currentUser$(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }


  public async initialize(): Promise<void> {
    if (this.platform.is('capacitor')) {
      return;
    }
    /**
     * Only needed if the Firebase JavaScript SDK is used.
     *
     * Read more: https://github.com/robingenz/capacitor-firebase/blob/main/packages/authentication/docs/firebase-js-sdk.md
     */
    initializeApp(environment.firebase);
  }

  public async getRedirectResult(): Promise<SignInResult | undefined> {
    if (Capacitor.isNativePlatform()) {
      return undefined;
    }
    return FirebaseAuthentication.getRedirectResult();
  }

  

  public getCurrentUser(): Promise<User | null> {
    return lastValueFrom(this.currentUser$.pipe(take(1)));
  }

  public async getIdToken(options?: GetIdTokenOptions): Promise<string> {
    const result = await FirebaseAuthentication.getIdToken(options);
    return result.token;
  }

  public async setLanguageCode(languageCode: string): Promise<void> {
    await FirebaseAuthentication.setLanguageCode({ languageCode });
  }

  public async signInWithApple(): Promise<SignInResult> {
    return await FirebaseAuthentication.signInWithApple();
  }

  public async signInWithFacebook(): Promise<SignInResult> {
    return await FirebaseAuthentication.signInWithFacebook();
  }

  public async signInWithGoogle(): Promise<SignInResult> {
    return await FirebaseAuthentication.signInWithGoogle();
  }

  public async signInWithTwitter(): Promise<SignInResult> {
    return await FirebaseAuthentication.signInWithTwitter();
  }

  public async signInWithEmailAndPassword(email: string, password: string): Promise<SignInResult> {
    return await FirebaseAuthentication.signInWithEmailAndPassword({ email, password });
  }

  public async CreateWithEmailAndPassword(email: string, password: string): Promise<SignInResult> {
    return await FirebaseAuthentication.createUserWithEmailAndPassword({ email, password });
  }

  public async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut();
  }

  public async useAppLanguage(): Promise<void> {
    await FirebaseAuthentication.useAppLanguage();
  }
}