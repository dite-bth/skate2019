import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';


@Component({
  selector: 'page-home',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public skate:SkateProvider) {
    this.skate.getMedia(function(media){
      console.log(media)
    });
  }



}
