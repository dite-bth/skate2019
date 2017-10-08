import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { TourPage} from '../tour/tour';
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

  showEditor(){
    this.navCtrl.push(EditorPage);
  }


}
