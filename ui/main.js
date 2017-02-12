console.log('Loaded!');

//doing some changing
var element = document.getElementById('main-text');
element.innerHTML=' Testing javascript' ;

//try to drag the image in browser
var image = document.getElementById('madi');
image.onClick =function()
 {
     image.style.marginLeft= '100px';
 };