import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';

import { ModalController} from 'ionic-angular';
import { ModalContentPage } from '../tour/pages';
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public skate:SkateProvider, public modalCtrl: ModalController) {
        this.skate.getTour(function(tour){
            console.log(tour);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TourPage');
    }
    openModal(characterNum) {

        let modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    }
}
