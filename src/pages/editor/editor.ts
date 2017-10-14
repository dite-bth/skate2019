import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';
import { EditorGalleryModalPage } from '../editor/editor-gallery-modal';
import { AuthProvider } from '../../providers/auth/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'editor.html'
})
export class EditorPage {

  tags: any;
  gallery_items: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public skate:SkateProvider, public modalCtrl: ModalController, public auth: AuthProvider) {
    this.skate.getWhiteListedTags((tags) => {
      this.tags = tags;
    })

    this.skate.getMedia((items) => {
      this.gallery_items = items;
    })

    //this.skate.editMedia("5f4f2c68594976ce99c32f1f830349f5",{status:1,nick:"sk8 kiddo"},(res) => {
    //  console.log("got:",res);
    //})
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Här loggar Admins in för ändra innehåll",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  editGalleryItem(item) {
    console.log(item);

    const galleryModal = this.modalCtrl.create(EditorGalleryModalPage, {item});
    galleryModal.present();
  }

  logout() {
    this.auth.signOut().then(() => {
      this.navCtrl.pop();
    }).catch((reason) => {
      console.log(reason);
    });
  }
}
