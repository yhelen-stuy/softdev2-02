var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var funB = document.getElementById("fun");
var dvdB = document.getElementById("dvd");
var stopB = document.getElementById("stop");

var h = c.getAttribute("height");
var w = c.getAttribute("width");
var r = h / 25;

var x = null;
var y = null;
var xChange = 1;
var yChange = 2;
var MAX_CHANGE = 4;

var pi = Math.PI;

var a = -1;
var b = -1;

var drawCircle = function(cx, cy) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * pi);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
}

var animateDVD = function(e) {
    if (b > -1) {
        stopFrame(b);
    }
    clear();
    if (x == null || y == null) {
        x = w / 2;
        y = h / 2;
    }
    drawCircle(x, y);
    x += xChange;
    y += yChange;
    if (x > w - r) {
        xChange = Math.floor(Math.random() * MAX_CHANGE) * -1;
    } else if (x < r) {
        xChange = Math.floor(Math.random() * (MAX_CHANGE)) + 1;
    }
    if (y > h - r) {
        yChange = Math.floor(Math.random() * MAX_CHANGE) * -1;
    } else if (y < r) {
        yChange = Math.floor(Math.random() * (MAX_CHANGE)) + 1;
    }
    a = window.requestAnimationFrame(animateDVD);
}

var animateFun = function(e) {
    if (a > -1) {
        stopFrame(a);
    }
    clear();
    if (x == null || y == null) {
        x = Math.floor(Math.random() * w);
        y = Math.floor(Math.random() * h);
    }
    drawCircle(x, y);
    x = (x + 2) % w;
    y = (y + 2) % h;
    b = window.requestAnimationFrame(animateFun);
}

var reset = function() {
    x = null;
    y = null;
    a = -1;
    b = -1;
}

var clear = function() {
    ctx.clearRect(0, 0, h, w);
}

var stopFrame = function(frame) {
    if (frame > -1) {
        window.cancelAnimationFrame(frame);
    }
    reset();
}

var stopCanvas = function(e) {
    stopFrame(a);
    stopFrame(b);
    reset();
}

funB.addEventListener('click', animateFun);
dvdB.addEventListener('click', animateDVD);
stopB.addEventListener('click', stopCanvas);
