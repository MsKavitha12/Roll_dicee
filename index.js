var randeomnumber1=Math.floor(Math.random()*6)+1;

var randomdiceeimage = "dice"+randeomnumber1 +".png";

var randomimagesource = "images/"+randomdiceeimage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimagesource);

var randeomnumber2=Math.floor(Math.random()*6)+1;

var randomdiceeimage = "dice"+randeomnumber2 +".png";

var randomimagesource = "images/"+randomdiceeimage;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomimagesource);

if(randeomnumber1 === randeomnumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randeomnumber1 > randeomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
