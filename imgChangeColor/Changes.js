var imgOr = null;
var img1 = null;
var img2 = null;
var img3 = null;
var img4 = null;
var canvas = document.getElementById("canv");
function uploadImg(){
 var finput = document.getElementById("inputf");
 imgOr = new SimpleImage(finput);
 imgOr.drawTo(canvas);
 copyimg(finput);
}
function copyimg(finput){
 img1 = new SimpleImage(finput);
 img2= new SimpleImage(finput);
 img3 = new SimpleImage(finput);
 img4 = new SimpleImage(finput);
}
function isLoaded(img){
  if(img == null || !img.complete()){
    alert("Image is not loaded");
    return false;
  }
  else{
    return true;
  }
}
function makegray(){
  for(var pixel of img1.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}
function dogray(){
  if(isLoaded(img1)){
    makegray();
    img1.drawTo(canvas);
  }
}
function makered(){
  for(var pixel of img2.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(avg*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((avg*2)-255);
      pixel.setBlue((avg*2)-255);
    }
  }
  img2.drawTo(canvas);
}
function makerainbow(){
  for(var pixel of img4.values()){
    var avg = pixel.getRed() + pixel.getGreen() + pixel.getBlue() / 3;
    var y = pixel.getY();
    var height = img4.getHeight();
    var R;
    var G;
    var B;
    if(y < height*1/7){
      if(avg < 128){
       R = 2*avg;
       G = 0;
       Bc = 0;
       pixel.setRed(R);
       pixel.setGreen(G);
       pixel.setBlue(B);
      }
      else{
        R = 255;
        G = 2*avg-255;
        B = 2*avg-255;
        pixel.setRed(R);
        pixel.setGreen(G);
        pixel.setBlue(B);
      }
    }
    else if(y >= height*1/7 && y < height*2/7){
      if(avg < 128){
         R = 2*avg;
       G = 0.8*avg;
       B = 0;
       pixel.setRed(R);
       pixel.setGreen(G);
       pixel.setBlue(B);
      }
      else{
        R = 255;
        G = 1.2*avg-51;
        B = 2*avg-255;
        pixel.setRed(R);
        pixel.setGreen(G);
        pixel.setBlue(B);
      }
    }
    else if(y >= height*2/7 && y < height*3/7){
      if(avg < 128){
        R = 2*avg;
       G = 2*avg;
       B = 0;
       pixel.setRed(R);
       pixel.setGreen(G);
       pixel.setBlue(B);
      }
      else{
        R = 255;
        G = 255;
        B = 2*avg-255;
        pixel.setRed(R);
        pixel.setGreen(G);
        pixel.setBlue(B);
      }
    }
    else if(y >= height*3/7 && y < height*4/7){
      if(avg < 128){
        R = 0;
       G = 2*avg;
       B = 0;
       pixel.setRed(R);
       pixel.setGreen(G);
       pixel.setBlue(B);
      }
      else{
        R = 2*avg-255;
        G = 255;
        B = 2*avg-255;
        pixel.setRed(R);
        pixel.setGreen(G);
        pixel.setBlue(B);
      }
    }
    else if(y >= height*4/7 && y < height*5/7){
      if(avg < 128){
         R = 0;
       G = 0;
       B = 2*avg;
       pixel.setRed(R);
       pixel.setGreen(G);
       pixel.setBlue(B);
      }
      else{
        R = 2*avg-255;
        G = 2*avg-255;
        B = 255;
        pixel.setRed(R);
        pixel.setGreen(G);
        pixel.setBlue(B);
      }
    }
    else if(y >= height*5/7 && y < height*6/7){
      if(avg < 128){
        R = 0.8*avg;
       G = 0;
       B = 2*avg;
       pixel.setRed(R);
       pixel.setGreen(G);
       pixel.setBlue(B);
      }
      else{
        R = 1.2*avg-51;
        G = 2*avg-255;
        B = 255;
        pixel.setRed(R);
        pixel.setGreen(G);
        pixel.setBlue(B);
      }
    }
    else if(y >= height*6/7){
      if(avg < 128){
        R = 1.6*avg;
       G = 0;
       Bc = 1.6*avg;
       pixel.setRed(R);
       pixel.setGreen(G);
       pixel.setBlue(B);
      }
      else{
       R = 0.4*avg+253;
        G = 2*avg-255;
        B = 0.4*avg+253;
        pixel.setRed(R);
        pixel.setGreen(G);
        pixel.setBlue(B);
      }
    }
  }
  img4.drawTo(canvas);
}
function reset(){
  imgOr.drawTo(canvas);
  if(isLoaded(imgOr)){
    var copy = new SimpleImage(imgOr);
     img1 = copy;
     img2 = copy;
     img3 = copy;
     img4 = copy;
  }
}
function makeswitch(){
  for(var pixel of img3.values()){
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    pixel.setRed(blue);
    pixel.setGreen(red);
    pixel.setBlue(green);
  }
  img3.drawTo(canvas);
}