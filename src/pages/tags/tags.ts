import { Component } from '@angular/core';
import { ModalController,NavController, NavParams } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';
import { TagsModalPage } from '../tags/tags-modal';


@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html',
})
export class TagsPage {

  tags: any;
  mediatags: any;
  unlisted_tags: any;
  temp: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public skate: SkateProvider, public modalCtrl: ModalController) {
  this.skate.getMediaTags((items)=>{
    this.mediatags = items;
  });
  this.skate.getWhiteListedTags((tag) => {
    this.tags = tag;
  });

  this.temp = [];
  }

  blacklistModal(unlisted_tags) {

    const tagsModal = this.modalCtrl.create(TagsModalPage, {unlisted_tags});
    tagsModal.present();
  }

  blacklistTags() {
    for (let i = 0; i < this.mediatags.length; i++) {
      for (let j = 0; j < this.mediatags[i].length; j++) {
        this.temp.push(this.mediatags[i][j]); // pushar resultat från loop till en temporär array
      }
    }
    let uniqueArray = this.temp.sort();  //sortera array i bokstavsordning
    let uniq = uniqueArray.reduce(function(a,b){  // ta bort dubbletter
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]); //tom array blir starting value för a
    this.unlisted_tags = uniq.filter(x => this.tags.indexOf(x) == -1) //jämför uniq array med this tags array, unlisted_tags blir en "blacklist" arr
  }
}
