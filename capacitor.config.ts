import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'COM.WEBINAR.TEST',
  appName: 'WEBINAR',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '100',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '100'
      
    }
  }
};

export default config;
