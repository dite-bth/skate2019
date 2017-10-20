import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';

/**
 * Generated class for the TagsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tags-modal',
  templateUrl: 'tags-modal.html',
})

export class TagsModalPage {

item: any = [];
temp: any;
whitelist: any;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public skate: SkateProvider) {
    //this.skate.updateWhiteListedTags(["test"],(res) => {
    //  console.log("got:",res);
  //  });

    this.temp = [];
    this.whitelist = [];

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TagsModalPage');
    this.item.push(this.navParams.get('unlisted_tags'));
  //  console.log(this.item);
    for (let i = 0; i < this.item.length; i++) {
      for (let j = 0; j < this.item[i].length; j++) {
        this.temp.push({Name:this.item[i][j], Value:false});
      }
   }
  }

  addTags() {
    for (var i=0;i<this.temp.length;i++){
      if (this.temp[i].Value) this.whitelist.push(this.temp[i].Name);
    }
    this.skate.updateWhiteListedTags(this.whitelist,(res) => {
    console.log("got:",res);
    });
    let alert = this.alertCtrl.create({
      title:'WhiteList taggar',
      subTitle: 'Nu har de valda taggarna lagts till i whitelist!',
      buttons: ['OK!']
      });
      alert.present();
    this.navCtrl.pop();
  }

}
