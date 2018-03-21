import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';
import { DisplayNotificationsPage } from '../display-notifications/display-notifications';
import { TransactionMasterPage } from '../transaction-master/transaction-master';


declare var greeting;
declare var ejs;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('hejs') hejsRef : ElementRef;
    html:any;
    data = {
      title: 'Cleaning Supplies'
    }

// str : String = `<% if (user.length > 0) { %>
//   <p><%= user %></p>
//   <p> This is a paragraph. </p>
//   <p>This is a paragraph.</p> 
//   <p>This is a paragraph.</p>
// <% } %>`;

// str : String = `<% include cleaning %>`;

  constructor(public navCtrl: NavController,
          public modalCtrl: ModalController) {}
          
  ionViewDidLoad() {
    alert(greeting);
    // this.html = ejs.render(this.str,{title:this.data.title} );
    // this.hejsRef.nativeElement.insertAdjacentHTML('beforeend', this.html);
  }        
  
  showTransactionDetail() {
    this.navCtrl.push(TransactionMasterPage);
  }

  showNotifications() {
    let modal = this.modalCtrl.create(DisplayNotificationsPage);
    modal.present();
  }
}
