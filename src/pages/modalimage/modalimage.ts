import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'ModalImagePage',
  templateUrl: 'modalimage.html',
})
export class ModalImagePage {

url:any;
description:any;
nick: any;
uploadTimeString: any;
views: any;
tags: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.url = this.navParams.get('url');
    this.description = this.navParams.get('description');
    this.nick = this.navParams.get('nick');
    this.uploadTimeString = this.navParams.get('uploadTimeString');
    this.views = this.navParams.get('views');
    this.tags = this.navParams.get('tags');
   }


  ionViewDidLoad() {
  }


}
