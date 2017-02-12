console.log('Loaded!');

//doing some changing
var element = document.getElementById('main-text');
element.innerHTML=' Testing javascript' ;

//try to drag the image in browser
var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight()
{
marginLeft = marginLeft + 10 ;
img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function()
 {
     var interval = setInterval(moveRight, 100);
 };