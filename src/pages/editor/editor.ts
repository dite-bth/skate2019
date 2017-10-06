import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';



@Component({
  selector: 'page-home',
  templateUrl: 'editor.html'
})
export class EditorPage {

  tags: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public skate:SkateProvider) {
    this.skate.getTags((tags) => {
      this.tags = tags;
      console.log(this.tags);
    })
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
}
