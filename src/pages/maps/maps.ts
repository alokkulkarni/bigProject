import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
  	//location
  	const location = new google.maps.LatLng(51.507351, -0.127758);

    //{lat: 51.507351, lng: -0.127758};

    
  	//Map Options
  	const options = {
  		center: location,
  		zoom: 15,
  		mapTypeId: 'hybrid',
  		streetViewControl: true
  	}

  	const map = new google.maps.Map(this.mapRef.nativeElement, options);

  	this.addMarker(location, map);

  }

  addMarker(position, map) {
  	return new google.maps.Marker({
  		position,
  		map
  	});
  }

}
