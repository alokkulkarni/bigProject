import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';

/**
 * Generated class for the TransactionMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transaction-master',
  templateUrl: 'transaction-master.html',
})
export class TransactionMasterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionMasterPage');
  }

  showTransactionDetail() {
      this.navCtrl.push(TransactionPage);
  }
}
