import { Component, ViewChild, ElementRef} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';
import { Badge } from '@ionic-native/badge';
import { Deeplinks } from '@ionic-native/deeplinks';
import { Device } from '@ionic-native/device';
import 'web-animations-js/web-animations.min';

import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ConstantProvider } from '../providers/constant/constant'; 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;
  
  fingerprintOptions: FingerprintOptions;
  uniqueID: string;
  message: any;
  @ViewChild('Nav') navCtrl: ElementRef;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              public constantService: ConstantProvider, 
              public uniqueDeviceID: UniqueDeviceID,
              public fingerprint: FingerprintAIO,
              public backgroundFetch: BackgroundFetch,
              public badge: Badge,              
              public device: Device,
              public deeplinks: Deeplinks) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      console.log('Device details: ' + device.uuid + ' ' + device.platform + ' ' + device.version);

      if (badge.hasPermission()) {
        badge.set(10);
      } else {
        console.log("no permission to setup badge");
      }

      uniqueDeviceID
        .get()
        .then((uuid : any) => {
          this.uniqueID = uuid;
          console.log("unique ID is : - " + this.uniqueID);
        })
        .catch((error : any) => console.log(error));

      const config : BackgroundFetchConfig = {
        stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
      };

      console.log(backgroundFetch.status());

      backgroundFetch
        .configure(config)
        .then(() => {
          console.log('Background Fetch initialized');
          this
            .backgroundFetch
            .finish();

        })
        .catch(e => console.log('Error initializing background fetch', e));

      // Start the background-fetch API. Your callbackFn provided to #configure will
      // be executed each time a background-fetch event occurs. NOTE the #configure
      // method automatically calls #start. You do not have to call this method after
      // you #configure the plugin
      backgroundFetch.start();

      // Stop the background-fetch API from firing fetch events. Your callbackFn
      // provided to #configure will no longer be executed.
      backgroundFetch.stop();

      this.fingerprintOptions = {
        clientId: this.uniqueID,
        clientSecret: 'password',
        disableBackup: false,
        localizedFallbackTitle: 'Enter Passcode',
        localizedReason: 'Identify yourself !!'
      };

      fingerprint
        .isAvailable()
        .then(result => {
          console.log(result);
          if (result) {
            fingerprint
              .show(this.fingerprintOptions)
              .then(result => {
                console.log(result);
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });

      // deeplinks
      //   .routeWithNavController(this.navCtrl, {
      //   '/about-us': AboutPage,
      //   '/products/:productId': ContactPage
      // })
      //   .subscribe((match) => {
      //     // match.$route - the route we matched, which is the matched entry from the
      //     // arguments to route() match.$args - the args passed in the link match.$link -
      //     // the full link data
      //     console.log('Successfully matched route', match);
      //   }, (nomatch) => {
      //     // nomatch.$link - the full link data
      //     console.error('Got a deeplink that didn\'t match', nomatch);
      //   });

      if (this.constantService.getSkipTutorial()) {
        console.log(this.constantService.getSkipTutorial());
        this.rootPage = TabsPage;
      } else {
        this.rootPage = TutorialPage;
      }
    });
  }
}
