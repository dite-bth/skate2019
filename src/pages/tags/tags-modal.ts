import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
blacklist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public skate: SkateProvider) {
    //this.skate.updateWhiteListedTags(["test"],(res) => {
    //  console.log("got:",res);
  //  });

    this.temp = [];
    this.whitelist = [];
    this.blacklist = [];

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TagsModalPage');
    this.item.push(this.navParams.get('unlisted_tags'));
  //  console.log(this.item);
    for (let i = 0; i < this.item.length; i++) {
      for (let j = 0; j < this.item[i].length; j++) {
        this.temp.push(this.item[i][j]);

      }
   }
//   console.log(this.temp)
  }

  addTags() {
    for (var i=0;i<this.temp.length;i++){
      if (this.temp[i]) this.whitelist.push(this.temp[i]);
    }
    console.log(this.whitelist);
  }
}
