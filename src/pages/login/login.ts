import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PinDialog} from '@ionic-native/pin-dialog';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private pin: PinDialog) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.showPinDialog();
  }

  showPinDialog() {
      this
        .pin
        .prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
        .then((result : any) => {
          if (result.buttonIndex == 1) {
            console.log('User clicked OK, value is: ', result.input1);
            this.navCtrl.setRoot(TabsPage);
          } else if (result.buttonIndex == 2)  {
            console.log('User cancelled');
          }
        });
  }

}