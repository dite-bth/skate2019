import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { TourPage} from '../tour/tour';
import { EditorPage} from '../editor/editor';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthProvider, public alertCtrl: AlertController, public skate:SkateProvider) {
    this.skate.getLandingPageData(function(data){console.log(data)});
  }

  showGallery(){
    this.navCtrl.push(GalleryPage);
  }

  showTour(){
    this.navCtrl.push(TourPage);
  }

  showEditor(){
    this.navCtrl.push(EditorPage);
  }

  ionViewDidLoad() {
    this.auth.expired().then(() => {
      this.navCtrl.push(EditorPage);
    }).catch((reason) => {
      console.log(reason);
    });
  }

  presentLoginPrompt() {
    const loginPrompt = this.alertCtrl.create({
      message: 'Inlogg för moderatorerna      epost: admin@gmail.com, lösenord: 123',
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
    this.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
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
