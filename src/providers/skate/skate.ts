import { Injectable } from '@angular/core';

@Injectable()
export class SkateProvider {

public version: string = "0.2";


  constructor() {
  }



  getTags(callback){
    var xhrTag =  new XMLHttpRequest();
    xhrTag.open('GET', 'http://nile16.nu:5984/misc/tags', true);
    xhrTag.onreadystatechange = function(response) {
      if (xhrTag.readyState == 4) {
        callback(JSON.parse(xhrTag.response).value);
       }
    }
    xhrTag.send();
  }

  getMedia(callback){
    var xhrTag =  new XMLHttpRequest();
    xhrTag.open('GET', 'http://nile16.nu:5984/media/_all_docs?include_docs=true', true);
    xhrTag.onreadystatechange = function(response) {
      if (xhrTag.readyState == 4) {
        var rows = JSON.parse(xhrTag.response).rows;
        var result = [];
        for (var i=0;i<rows.length;i++){
          var temp = {
          description:null,
          nick:null,
          tags:null,
          takenTime:null,
          uploadTime:null,
          lat:null,
          lon:null,
          //mediaType:false,
          url:null
          }
          if (rows[i].doc.description) temp.description = rows[i].doc.description;
          if (rows[i].doc.nick) temp.nick = rows[i].doc.nick;
          if (rows[i].doc.tags) temp.tags = rows[i].doc.tags;
          if (rows[i].doc.takenTime) temp.takenTime = rows[i].doc.takenTime;
          if (rows[i].doc.uploadTime) temp.uploadTime = rows[i].doc.uploadTime;
          if (rows[i].doc.lat) temp.lat = rows[i].doc.lat;
          if (rows[i].doc.lon) temp.lon = rows[i].doc.lon;
          if (rows[i].doc._attachments) temp.url = "http://nile16.nu:5984/media/"+rows[i].doc._id+"/"+Object.keys(rows[i].doc._attachments)[0];
          result.push(temp);
        }
        callback(result);
       }
    }
    xhrTag.send();
  }



}
