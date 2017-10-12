import { Injectable } from '@angular/core';

declare var JpegMeta;

@Injectable()
export class SkateProvider {

public version: string = "0.5";


  constructor() {
  }


  toDecimal(number) {
      return number[0].num/number[0].den + (number[1].num/(60 * number[1].den)) + (number[2].num/(3600 * number[2].den));
    };

  getWhiteListedTags(callback){
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
          var temp = rows[i].doc;
          delete temp._rev;
          if (typeof temp.uploadTime == 'number'){
            var date = Date(temp.uploadTime);
            temp.uploadTimeString = date.toString();
          }
          if (temp._attachments){
             temp.url = "http://nile16.nu:5984/media/"+temp._id+"/"+Object.keys(temp._attachments)[0];
             delete temp._attachments;
           }
          result.push(temp);
        }
        callback(result);
       }
    }
    xhrTag.send();
  }

  getTour(callback){
    var xhrTag =  new XMLHttpRequest();
    xhrTag.open('GET', 'http://nile16.nu:5984/misc/tourInfo/', true);
    xhrTag.onreadystatechange = function(response) {
      if (xhrTag.readyState == 4) {
        var rows = JSON.parse(xhrTag.response).value;
        var result = [];
        for (var i=0;i<rows.length;i++){
          var temp = {
          ort:null,
          tid:null,
          adress:null,
          info:null
          }
          if (rows[i].ort) temp.ort = rows[i].ort;
          if (rows[i].tid) temp.tid = rows[i].tid;
          if (rows[i].adress) temp.adress = rows[i].adress;
          if (rows[i].info) temp.info = rows[i].info;
          result.push(temp);
        }
        callback(result);
       }
    }
    xhrTag.send();
  }

    getExif(file,callback){
        var self=this;
        var fileReaderExif = new FileReader();
    		var lat  = null;
    		var lon  = null;
    		var takenTime = null;
    		fileReaderExif.onloadend = function() {
    			var meta = (new JpegMeta.JpegFile(this.result, file.name).metaGroups);
    			if (meta.gps){
            lat  = self.toDecimal(meta.gps.GPSLatitude.value).toFixed(5);
            lon  = self.toDecimal(meta.gps.GPSLongitude.value).toFixed(5);
          }
    			if (meta.exif&&meta.exif.DateTimeOriginal)
            takenTime = meta.exif.DateTimeOriginal.value;
          callback({takenTime:takenTime,lat:lat,lon:lon});
    		};
    		fileReaderExif.readAsBinaryString(file);
    	}

    uploadMedia(file,meta,callback) {
      this.getExif(file,(exif) => {
        Object.assign(meta,exif);
        var url = 'http://nile16.nu:5984/media/';
        var fileReader = new FileReader();
        var xhr1 =  new XMLHttpRequest();
        xhr1.open('POST', url, true);
        xhr1.setRequestHeader("Content-Type", "application/json");
        xhr1.onreadystatechange = function(response) {
          if (xhr1.readyState == 4) {
            var docId = JSON.parse(xhr1.response).id;
            var docRev = JSON.parse(xhr1.response).rev;
            var name = encodeURIComponent(file.name);
            var type = file.type;
            var xhr2 = new XMLHttpRequest();
            xhr2.open('PUT', url+docId+'/'+name+'?rev='+docRev, true);
            xhr2.setRequestHeader('Content-Type', type);
            xhr2.onreadystatechange = function(response) {
              if (xhr2.readyState == 4) {
                callback(xhr2.response);
              }
            }
            fileReader.onload = function (readerEvent) {
              xhr2.send(this.result);
            };
            fileReader.readAsArrayBuffer(file);
          }
        }
        meta.uploadTime = Math.floor((new Date().getTime())/1000);
        //meta.uploadTime = (new Date()).toString();
        meta.status=0;
        xhr1.send(JSON.stringify(meta));
      });
    }

    editMedia(docId,meta,callback) {
      var url = 'http://nile16.nu:5984/media/';
      var xhr1 =  new XMLHttpRequest();
      xhr1.open('GET', url+docId, true);
      xhr1.setRequestHeader("Content-Type", "application/json");
      xhr1.onreadystatechange = function(response) {
        if (xhr1.readyState == 4) {
          var doc = JSON.parse(xhr1.response);
          if(doc.error){
            callback(doc);
            return(1);
          }
          delete doc._id;
          Object.assign(doc,meta);
          var xhr2 = new XMLHttpRequest();
          xhr2.open('PUT', url+docId, true);
          xhr2.setRequestHeader("Content-Type", "application/json");
          xhr2.onreadystatechange = function(response) {
            if (xhr2.readyState == 4) {
              callback(xhr2.response);
            }
          }
          xhr2.send(JSON.stringify(doc));
        }
      }
      xhr1.send();
    }


}
