import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';

import { ModalController} from 'ionic-angular';
import { ModalContentPage } from '../tour/pages';
import { MapPage } from '../map/map';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertController } from 'ionic-angular';
import { EditorPage } from '../editor/editor';
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
    city_items: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public skate:SkateProvider, public modalCtrl: ModalController,public auth: AuthProvider, public alertCtrl: AlertController) {
        this.skate.getTour((tour)=>{
            this.city_items = tour;
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TourPage');
    }
    showMap(){
        this.navCtrl.push(MapPage);
    }
    openModal(characterNum) {

        let modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    }


    presentLoginPrompt() {
        const loginPrompt = this.alertCtrl.create({
            message: 'Behövs inget inlogg.',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'e-post',
                    type: 'email'
                },
                {
                    name: 'password',
                    placeholder: 'Lösenord',
                    type: 'password'
                },
                {
                    name: 'admin',
                    placeholder: 'Admin? true/elr lämna tom',
                    type: 'text',
                }
            ],
            buttons: [
                {
                    text: 'Logga in',
                    handler: (user) => {
                        this.login(user);
                    }
                }
            ]
        });
        loginPrompt.present();
    };

    login(user) {
        this.auth.signInWithEmailAndPassword(user.email, user.password, user.admin).then(() => {
            this.navCtrl.push(EditorPage);
        }).catch((reason) => {
            console.log(reason);
            const errorPrompt = this.alertCtrl.create({
                message: reason,
                buttons: ['OK'],
            });
            errorPrompt.present();
        });
    }
}