import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cofanes.fidely_dev',
  appName: 'FIDELY BETA',
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
