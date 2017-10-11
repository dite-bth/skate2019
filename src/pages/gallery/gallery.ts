import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';
import { UploadPage } from '../upload/upload';


@Component({
  selector: 'page-home',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  gallery_items: any;
  shapes: string;



  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public skate:SkateProvider, public modalCtrl: ModalController) {
    this.skate.getMedia((media)=>{
      this.gallery_items = media;
      console.log(media)
    });
  }
  uploadPageModal() {
  const uploadModal = this.modalCtrl.create(UploadPage);

  uploadModal.present();
  }



  showPrompt() {
    let prompt = this.alertCtrl.create({

    });
    prompt.present();
  }


    randomShapes() {
     //#Paths för SVG...gjorda för viewbox(0 0 100 100)
      let shapes = ['M0 100 L80 100 L100 80 L100 60 L80 60 L80 40 L60 40 L60 20 L40 20 L40 0 L20 0 L0 20',
                  'M0 100 L80 100 L100 80 L40 0 L20 0 L0 20',
                  'M40 100 L60 100 L60 60 L100 60 L100 40 L0 40 L0 60 L40 60 L40 100',
                  'M0 100 L80 100 L100 80 C100 80 30 60 40 0 L20 0 L0 20 L0 100'];
      let rand_shape = Math.floor((Math.random() * (3 - 0 + 1) + 0));
      let svgTag = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" >' +
                      '<path stroke-width="2" fill="#FF9F00"' +
                      ' transform="rotate(0 50 50) scale(1.0)"' +
                      ' d="' + rand_shape + '" />' +
                      '</svg>';
    }



}
