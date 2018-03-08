console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML ="I have changed the content with javascript main file";

var img = document.getElementById("madi");
img.onclick = function() {
    img.style.marginLeft = '100px';
}