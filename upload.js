
var tags;
var fileReaderImg = new FileReader();
var fileReaderExif = new FileReader();
var fileReader = new FileReader();
var lat  = false;
var lon  = false;
var takenTime = false;

// Get tags from database and make a checkbox list 
var xhrTag =  new XMLHttpRequest();
xhrTag.open('GET', 'http://nile16.nu:5984/misc/tags', true);
xhrTag.onreadystatechange = function(response) {
  if (xhrTag.readyState == 4) {
    tags = JSON.parse(xhrTag.response).value;
    var html = "";
    for (var i=0;i<tags.length;i++){
        html += "<p style='color:white;'><input style='background-color: transparent !important; color: white !important;' type='checkbox' id='tag"+i+"'> "+""+tags[i]+"</p>"
    }
    formDiv.innerHTML=html;
  }

}
xhrTag.send();

function toDecimal(number) {
  return number[0].num/number[0].den + (number[1].num/(60 * number[1].den)) + (number[2].num/(3600 * number[2].den));
};

fileInput.addEventListener("change",function(e) {
  var file = e.target.files[0];
  fileReaderImg.onload = function (readerEvent) {
    picture.src = readerEvent.target.result;
    lat  = false;
    lon  = false;
    takenTime = false;
    fileReaderExif.onloadend = function() {
      meta = (new JpegMeta.JpegFile(this.result, file.name).metaGroups);
      lat  = toDecimal(meta.gps.GPSLatitude.value).toFixed(5);
      lon  = toDecimal(meta.gps.GPSLongitude.value).toFixed(5);
      takenTime = meta.exif.DateTimeOriginal.value;
    };
    fileReaderExif.readAsBinaryString(file);



  }
  fileReaderImg.readAsDataURL(fileInput.files[0]);
});

function uploadFile() {
  var url = 'http://nile16.nu:5984/media/';
  var file = fileInput.files[0];
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
          console.log(xhr2.response);
          alert("Uploaded!");
        }
      }
      fileReader.onload = function (readerEvent) {
        xhr2.send(readerEvent.target.result);
      };
      fileReader.readAsArrayBuffer(file);
    }
  }
  var selectedTags = [];
  for (var i=0;i<tags.length;i++){
    if (document.getElementById("tag"+i).checked) selectedTags.push(tags[i]);
  }
  //var uploadTime = Math.floor((new Date().getTime())/1000);
  var uploadTime = (new Date()).toString();
  xhr1.send(JSON.stringify({description:description.value.trim(),nick:nick.value.trim(),tags:selectedTags,uploadTime:uploadTime,takenTime:takenTime,lat:lat,lon:lon}));
}
