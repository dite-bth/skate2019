import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {
    @ViewChild('map') mapElement: ElementRef;
    map: any;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad(){
        this.initMap();
      }
    
      initMap() {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            mapTypeControl: false,
            streetViewControl: false,
            disableDefaultUI: true,
          center: {lat: 62.8531393, lng: 16.4007149},
          zoom: 4,
          minZoom: 4,
          styles: [ { "elementType": "geometry", "stylers": [ { "color": "#212121" } ] }, { "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#212121" } ] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [ { "color": "#757575" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "administrative.land_parcel", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "administrative.neighborhood", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#181818" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [ { "color": "#1b1b1b" } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#2c2c2c" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#8a8a8a" } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#373737" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#3c3c3c" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "color": "#4e4e4e" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#000000" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#3d3d3d" } ] } ]
        });

        var malmo = {
            info: '<strong>Malmö</strong><br>\
                        10 Juni - 10 Juli<br>',
                        lat: 55.5702828,
                        long: 12.8758892
        };

        var stockholm = {
            info: '<strong>Stockholm</strong><br>\
                        10 Juni - 10 Juli<br>',
                        lat: 59.326242,
                        long: 17.84197
        };

        var karlstad = {
            info: '<strong>Karlstad</strong><br>\
                        10 Juni - 10 Juli<br>',
                        lat: 59.3929427,
                        long: 13.4534774
        };

          var locations = [
            [malmo.info, malmo.lat, malmo.long, 0],
            [stockholm.info, stockholm.lat, stockholm.long, 1],
            [karlstad.info, karlstad.lat, karlstad.long, 2],  
          ];

          var infowindow = new google.maps.InfoWindow({});
          
              var marker, i;
          
              for (i = 0; i < locations.length; i++) {
                  marker = new google.maps.Marker({
                      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                      map: this.map
                  });
          
                  google.maps.event.addListener(marker, 'click', (function (marker, i) {
                      return function () {
                          infowindow.setContent(locations[i][0]);
                          infowindow.open(this.map, marker);
                      }
                  })(marker, i));
              }
    }
}
