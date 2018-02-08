var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var stopB = document.getElementById("stop");

var h = c.getAttribute("height");
var w = c.getAttribute("width");
var r = h / 25;

var x = -1;
var y = -1;

var pi = Math.PI;

var a = -1;

var drawCircle = function(e) {
    ctx.clearRect(0, 0, h, w);
    if (x < 0 || y < 0) {
        x = e.offsetX;
        y = e.offsetY;
    }
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * pi);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    x++;
    a = window.requestAnimationFrame(drawCircle);
}

var reset = function() {
    x = -1;
    y = -1;
    a = -1;
}

var stopCanvas = function(e) {
    e.preventDefault();
    if (a > -1) {
        window.cancelAnimationFrame(a);
    }
    reset();
}

c.addEventListener('click', drawCircle);
stopB.addEventListener('click', stopCanvas);
