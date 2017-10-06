import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { TourPage} from '../tour/tour';
import { UploadPage} from '../upload/upload';
import { EditorPage} from '../editor/editor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showGallery(){
    this.navCtrl.push(GalleryPage);
  }

  showTour(){
    this.navCtrl.push(TourPage);
  }

  showUpload(){
    this.navCtrl.push(UploadPage);
  }

  showEditor(){
    this.navCtrl.push(EditorPage);
  }


}
