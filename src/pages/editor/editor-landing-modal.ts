import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';


@Component({
  selector: 'page-editor-landing-modal',
  templateUrl: 'editor-landing-modal.html',
})
export class EditorLandingModalPage {

  text:any;
  picURL:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public skate:SkateProvider) {
    this.skate.getLandingPageData((data) => {
    this.text = data.text;
    this.picURL = data.picture;
   })
  }

  ionViewDidLoad() {
  }

  save(){
    this.skate.editLandingPageData({ text:this.text, picture:this.picURL },(res) => { console.log(res) });
  }

}
