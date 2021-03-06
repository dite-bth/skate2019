import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';
import { UploadPage } from '../upload/upload';
import { AuthProvider } from '../../providers/auth/auth';
import { EditorPage} from '../editor/editor';
import { ModalImagePage } from '../modalimage/modalimage';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  gallery_items: any;
  /*
  shapes = ['M0 100 L80 100 L100 80 L100 60 L80 60 L80 40 L60 40 L60 20 L40 20 L40 0 L20 0 L0 20',
            'M0 100 L80 100 L100 80 L40 0 L20 0 L0 20',
            'M40 100 L60 100 L60 60 L100 60 L100 40 L0 40 L0 60 L40 60 L40 100',
            'M 0 100 L 80 100 L 100 80 C 100 80 30 60 40 0 L 20 0 L 0 20 L 0 100'];
  colors = ['#88D5A1','#FEE185','#FBAC8D','#BDE3FF'];
  */

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public skate:SkateProvider,
    public modalCtrl: ModalController,
    public auth: AuthProvider,
    params: NavParams) {

      //this.skate.incMediaViewCount("5f4f2c68594976ce99c32f1f8300e0a9");

      this.skate.getMedia((media)=>{
        this.gallery_items = media;

        media.sort(function(a,b){
          return b.uploadTime - a.uploadTime
        });
        /*
        // Thanks to retarded angular, random shapes can not be inserted direct in HTML, but rather has to be stored first. See:
        // https://stackoverflow.com/questions/43079990/angular-2-expression-has-changed-after-it-was-checked-error-with-dynamic-image
        for (let i=0;i<this.gallery_items.length;i++) this.gallery_items[i].shape = Math.floor(Math.random() * this.shapes.length);
        for (let i=0;i<this.gallery_items.length;i++) this.gallery_items[i].color = Math.floor(Math.random() * this.colors.length);
        */
      });
  }

  showImage(media) {
    //this.navCtrl.push(ModalImagePage, media);
    this.skate.incMediaViewCount(media._id);
    const imagemodal = this.modalCtrl.create(ModalImagePage, media);
    imagemodal.present();
  }

  uploadPageModal() {
    const uploadModal = this.modalCtrl.create(UploadPage);
    uploadModal.present();
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
