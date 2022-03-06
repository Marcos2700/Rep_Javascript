var fimg=null;
var bimg=null;
function uploadForeg(){
  var fileInput = document.getElementById("input1");
  var canvas = document.getElementById("canv1");
  fimg = new SimpleImage(fileInput);
  fimg.drawTo(canvas);
}
function uploadBackg(){
  var fileInput = document.getElementById("input2");
  var canvas = document.getElementById("canv2");
  bimg = new SimpleImage(fileInput);
  bimg.drawTo(canvas);
}
function doClear(){
  var canv1 = document.getElementById("canv1");
  var canv2 = document.getElementById("canv2");
  var ctx1 = canv1.getContext("2d");
  var ctx2 = canv2.getContext("2d");
  ctx1.clearRect(0,0, canv1.width, canv1.height);
  ctx2.clearRect(0,0, canv2.width, canv2.height);
}
function doGreenScreen(){
  if(fimg == null || !fimg.complete()){
    alert("Foreground image has not been loaded");
  }
  if(bimg == null || !bimg.complete()){
    alert("Background image has not been loaded");
  }
 var output = new SimpleImage(fimg.getWidth(), fimg.getHeight());
  for(var pixel of fimg.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if((pixel.getRed()+pixel.getBlue()) < pixel.getGreen()){
      var bgpixel = bimg.getPixel(x, y);
      output.setPixel(x, y, bgpixel);
    }
    else{
      output.setPixel(x, y, pixel);
    }
  }
  var canv1 = document.getElementById("canv1");
  var canv2 = document.getElementById("canv2");
  doClear(canv1, canv2);
  output.drawTo(canv1);
}