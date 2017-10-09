import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditorGalleryModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editor-gallery-modal',
  templateUrl: 'editor-gallery-modal.html',
})
export class EditorGalleryModalPage {

  item: any = [];
  url: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorGalleryModalPage');
    this.item.push(this.navParams.get('item'));
    console.log(this.item);
  }

  saveGalleryItem(item) {
    /*
     Database stuff here
     */
    console.log("saveGalleryItem");
    console.log(item);
    this.navCtrl.pop();
  };

}
