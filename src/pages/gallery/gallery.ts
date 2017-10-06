import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';


@Component({
  selector: 'page-home',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  gallery_items: any;



  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public skate:SkateProvider) {
    this.skate.getMedia((media)=>{
      this.gallery_items = media;
      console.log(media)
    });
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: "Vadå skateutställning ?",
      message: "  Vad är Lorem Ipsum Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.   Lorem ipsum har varit standard ända sedan 1500-talet",

    });
    prompt.present();
  }
}
