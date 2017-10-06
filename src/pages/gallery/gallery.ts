import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';


@Component({
  selector: 'page-home',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  gallery_items: any;



  constructor(public navCtrl: NavController, public skate:SkateProvider) {
    this.skate.getMedia((media)=>{
      this.gallery_items = media;
      console.log(media)
    });
  }





}
