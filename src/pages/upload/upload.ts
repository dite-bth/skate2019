import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';

declare var picture;
declare var fileInput;

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  tags = [];
  file: any;
  nick:string = "";
  description:string = "";

  preparedTags = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public skate:SkateProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    //this.skate.getMedia(function(media){console.log(media)});
  }


  ionViewDidLoad(){

<<<<<<< HEAD
    // Get tags from skate database and create a checkbox tag list
    this.skate.getWhiteListedTags((tags)=>{
         for (var i=0;i<tags.length;i++)
  		     this.tags.push({Name:tags[i],Value:false});
=======
    // Get tags from skate database and create a suggestion list for tag input
    this.skate.getTags((preparedTags)=>{
         for (var i=0;i<preparedTags.length;i++)
  		     this.preparedTags.push(preparedTags[i]);
           console.log(preparedTags)
>>>>>>> da828ad9bc63ba4bd63a7d3a7a182c9d91c3ad87
  	   });

  // Create listener that display the selected picture when a picture is selected.
  fileInput.addEventListener("change",(e) => {
    var fileReaderImg = new FileReader();
  	this.file = e.target.files[0];
  	fileReaderImg.onload = function (readerEvent) {
  		picture.src = this.result;
  	}
  	fileReaderImg.readAsDataURL(fileInput.files[0]);
  });

}


// This function is executed when the upload button is pressed
uploadFile(){
  var meta = {
    tags:[],
    nick:"",
    description:""
  };

  // Check which tags are selected and add those to meta in the form of an array
  for (var i=0;i<this.tags.length;i++){
    if (this.tags[i]) meta.tags.push(this.tags[i]);
  }

  //meta.nick = nick.value.trim();
  meta.nick = this.nick.trim();

  //meta.description = description.value.trim();
  meta.description = this.description.trim();

    this.skate.uploadMedia(this.file,meta,function(res){
      console.log(res);
    });
    let alert = this.alertCtrl.create({
    title:'Uppladdning klar',
    subTitle: 'Tack för ditt bidrag!',
    buttons: ['OK!']
    });
    alert.present();
  this.navCtrl.pop();
}

addTags() {
let prompt = this.alertCtrl.create({
  title: 'Lägg till egna taggar',
  message: "Här kan du lägga till taggar som du tycker ska vara med på utställningen och hemsidan!",
  inputs: [
    {
      name: 'Tagg',
      placeholder: 'Enter Tag here'
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
