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

  landingPagePicture:any;
  landingPageText:any;

  constructor(public navCtrl: NavController, public auth: AuthProvider, public alertCtrl: AlertController, public skate:SkateProvider) {
    this.skate.getLandingPageData((data) => {
      this.landingPagePicture = data.picture;
      this.landingPageText    = data.text;
    });
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
