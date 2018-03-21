import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { NativeStorage } from '@ionic-native/native-storage';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';
import { Badge } from '@ionic-native/badge';
import { CallNumber } from '@ionic-native/call-number';
import { Deeplinks } from '@ionic-native/deeplinks';
import {IonicStorageModule} from '@ionic/storage';
import { Device } from '@ionic-native/device';
import {PinDialog} from '@ionic-native/pin-dialog';


import {FloatingListComponent} from '../components/floating-list/floating-list';
import {NotificationComponent} from '../components/notification/notification';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { NgProgressModule } from 'ngx-progressbar';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MapsPage } from '../pages/maps/maps';
import { LoginPage } from '../pages/login/login';
import { DisplayNotificationsPage } from '../pages/display-notifications/display-notifications';
import { HelpPage } from '../pages/help/help';
import { MorePage } from '../pages/more/more';
import { TransactionPage } from '../pages/transaction/transaction';
import { TransactionMasterPage } from '../pages/transaction-master/transaction-master';
import { DisplayMapPage } from '../pages/display-map/display-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { ConstantProvider } from '../providers/constant/constant';

import {firebaseConfig} from '../environment/firebase.config';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TutorialPage,
    MapsPage,
    LoginPage,
    FloatingListComponent,
    NotificationComponent,
    DisplayNotificationsPage,
    HelpPage,
    MorePage,
    TransactionPage,
    TransactionMasterPage,
    DisplayMapPage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#F1F1F1",
      "backgroundPadding": -12,
      "radius": 60,
      "toFixed": 0,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#FF6347",
      "innerStrokeColor": "#32CD32",
      "innerStrokeWidth": 1,
      "title": "£1000"
    }),
    NgProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TutorialPage,
    MapsPage,
    LoginPage,
    DisplayNotificationsPage,
    HelpPage,
    MorePage,
    TransactionPage,
    TransactionMasterPage,
    DisplayMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConstantProvider,
    UniqueDeviceID,
    FingerprintAIO,
    NativeStorage,
    BackgroundFetch,
    Badge,
    CallNumber,
    Deeplinks,
    Device,
    PinDialog
  ]
})
export class AppModule {}
