import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SkateProvider } from '../../providers/skate/skate';


@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html',
})
export class TagsPage {

  tags: any;
  mediatags: any;
  unlisted_tags: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public skate: SkateProvider) {
  this.skate.getMediaTags((items)=>{
    this.mediatags = items;
  });
  this.skate.getWhiteListedTags((tag) => {
    this.tags = tag;
  });

  this.unlisted_tags = [];

  }


  compareTags() {
    let arr = [];
    for (let i = 0; i < this.mediatags.length; i++) {
      for (let j = 0; j < this.mediatags[i].length; j++) {
        console.log(this.mediatags[i][j]);

      }
    }

  }
    //for (let i = 0; i < this.mediatags.length; i ++) {
    //  console.log(this.mediatags[i]);

  //  }
  //  var temp = arr.concat(item);
  //    console.log(temp);

    //this.arr.push(temp);
    //console.log(this.arr);
    //this.arr.push(item);
    //console.log(this.arr);

  //  });
  //this.arr.push(temp);
  //console.log(this.arr);
  //  console.log(item);
  //console.log(value);
//  var temp = value.concat(arr);
  //console.log(arr);
  //var temp = arr.concat(value);

//  console.log(temp);
      //console.log(arr);


//  });
//  var mySet = new Set();
//  mySet.add(item.value);
  // console.log(mySet);
//}

    //console.log(item);
    //console.log(this.tags);


}
