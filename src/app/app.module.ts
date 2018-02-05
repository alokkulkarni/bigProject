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
import { Device } from '@ionic-native/device';
import {PinDialog} from '@ionic-native/pin-dialog';

import {FloatingListComponent} from '../components/floating-list/floating-list';
import {NotificationComponent} from '../components/notification/notification';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { ConstantProvider } from '../providers/constant/constant';

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
    MorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
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
    MorePage
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
