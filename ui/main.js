console.log('Loaded!');

//doing some changing
var element = document.getElementById('main-text');
element.innerHTML=' Testing javascript' ;

//try to drag the image in browser
var img = document.getElementById('madi');
img.onClick = function ()
 {
     img.style.marginLeft = '100px';
 };