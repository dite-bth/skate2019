import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'ModalImagePage',
  templateUrl: 'modalimage.html',
})
export class ModalImagePage {

url:any;
description:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.url = this.navParams.get('url');
    this.description = this.navParams.get('description');
   }


  ionViewDidLoad() {
  }


}
