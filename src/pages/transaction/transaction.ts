import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DisplayMapPage } from '../display-map/display-map';
/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;


@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  @ViewChild('mapRef') mapRef: ElementRef;

  coordinates = [{lat: 53.394775, lng: -2.343679},{lat: 53.394715,lng: -2.350580},{lat: 53.832247,lng: -1.467817},{lat: 53.888743,lng: -0.648900},{lat: 49.734237,lng: 10.982549}];
  
  lat: any;
  lng: any;

  image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  
  contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '</div>'+
            '</div>';


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    const coordinate = this.coordinates[Math.floor(Math.random() * this.coordinates.length)];
    // this.lat = 51.507351;
    // this.lng = -0.127758;

    this.lat = coordinate.lat;
    this.lng = coordinate.lng;
    this.showMap(this.lat, this.lng);
  }

  showMap(lat: string, lng: string) {
  	//location
  	const location = new google.maps.LatLng(lat, lng);

    //{lat: 51.507351, lng: -0.127758};

    
  	//Map Options
  	const options = {
  		center: location,
  		zoom: 8,
  		mapTypeId: 'roadmap',
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
      styles: [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{color: '#c9b2a6'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'geometry.stroke',
              stylers: [{color: '#dcd2be'}]
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ae9e90'}]
            },
            {
              featureType: 'landscape.natural',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#93817c'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry.fill',
              stylers: [{color: '#a5b076'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#447530'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#f5f1e6'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{color: '#fdfcf8'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#f8c967'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#e9bc62'}]
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry',
              stylers: [{color: '#e98d58'}]
            },
            {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry.stroke',
              stylers: [{color: '#db8555'}]
            },
            {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [{color: '#806b63'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.fill',
              stylers: [{color: '#8f7d77'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#ebe3cd'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{color: '#b9d3c2'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#92998d'}]
            }
        ]
  	}

  	const map = new google.maps.Map(this.mapRef.nativeElement, options);
    const infowindow = this.infowindowFunction();

    const marker = this.addMarker(location, map);
    
    marker.addListener('click', function() {
          
          infowindow.open(map, marker);
    });
  }

  infowindowFunction() {
    return new google.maps.InfoWindow({
          content: this.contentString
    });
  }



  addMarker(position, map) {
  	return new google.maps.Marker({
  		position,
      map,
      icon: this.image,
      animation: google.maps.Animation.DROP
  	});
  }

  showModalMapsPage() {
    let modal = this.modalCtrl.create(DisplayMapPage, {lat: this.lat, lng: this.lng});
    modal.present();
  }

}
