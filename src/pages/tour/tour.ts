import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';

/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public skate:SkateProvider) {
    this.skate.getTour(function(tour){
      console.log(tour);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
  }

}
