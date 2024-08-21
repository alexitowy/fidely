import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'APP_PACKAGE',
  appName: 'APP_NAME',
  webDir: 'www',
  cordova: {},
  server: {
    allowNavigation: ['*'],
  },
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com", "twitter.com", "facebook.com"]
    }
  }
};

export default config;
