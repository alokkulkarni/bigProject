import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
          private callNumber: CallNumber) {}



  dialNumber() {
  	this.callNumber.callNumber("18001010101", true)
  		.then(() => console.log('Launched dialer!'))
    	.catch((error) => console.log('Error launching dialer'));
  }	  			  
}
