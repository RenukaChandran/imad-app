console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML ="I have changed the content with javascript main file";

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight() {
    marginLeft += 0.00001;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 10);
}