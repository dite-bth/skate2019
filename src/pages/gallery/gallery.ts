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




}
