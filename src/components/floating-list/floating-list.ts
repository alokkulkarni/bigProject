import { Component } from '@angular/core';
import { NavController, FabContainer } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';

/**
 * Generated class for the FloatingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'floating-list',
  templateUrl: 'floating-list.html'
})
export class FloatingListComponent {



  constructor(public navCtrl : NavController, private callNumber : CallNumber) {}

  async dialNumber(fab : FabContainer) {
     try {
        fab.close();
        await this
          .callNumber
          .callNumber("18001010101", true);
     } catch(e) {
        console.log('Error launching dialer');
     }
  }

  chat(fab: FabContainer) {
    try{
      fab.close();
      console.log("chat completed");
    } catch(e) {
      console.log("failed to open chat");
    }
  }

}
