// All variable
var begin = document.getElementById("begin");
var startbtn = document.getElementById("startbtn");
var wrapper = document.getElementById("wrapper");
var mycar = document.getElementById("mycar");
var upcar = document.getElementById("upcar");
var end = document.getElementById("end");
var score = document.getElementById("score");
var c = 0;
var dis = 50;

startsong.play();

// change car
function change() {
    var n = Math.floor(Math.random() * 8);
    if (n == 0) {
        upcar.style.backgroundImage = "url('images/car0.png')";
        upcar.style.width = "170px";
    }
    else if (n == 1) {
        upcar.style.backgroundImage = "url('images/car1.png')";
        upcar.style.width = "170px";
    }
    else if (n == 2) {
        upcar.style.backgroundImage = "url('images/car2.png')";
        upcar.style.width = "160px";
    }
    else if (n == 3) {
        upcar.style.backgroundImage = "url('images/car3.png')";
        upcar.style.width = "180px";
    }
    else if (n == 4) {
        upcar.style.backgroundImage = "url('images/car4.png')";
        upcar.style.width = "160px";
    }
    else if (n == 5) {
        upcar.style.backgroundImage = "url('images/car5.png')";
        upcar.style.width = "80px";
    }
    else if (n == 6) {
        upcar.style.backgroundImage = "url('images/car6.png')";
        upcar.style.width = "100px";
    }
    else if (n == 7) {
        upcar.style.backgroundImage = "url('images/car7.png')";
        upcar.style.width = "110px";
    }
}

// Game Start
startbtn.addEventListener("click", () => {
    midsong.play();
    startsong.pause();
    begin.style.display = "none";
    wrapper.style.display = "flex";
})

// upcomming car Animation path change
upcar.addEventListener("animationiteration", () => {
    change();
    upcar.style.left = Math.floor(Math.random() * 3) * 10 + 40 + "%";
    c++;
});

// My car Animation path change
window.addEventListener("keydown", (e) => {
    horn.play();
    if (e.keyCode == 37) {
        if (dis > 40) {
            dis -= 10;
            mycar.style.left = dis + "%";
        }
    }
    else if (e.keyCode == 39) {
        if (dis < 60) {
            dis += 10;
            mycar.style.left = dis + "%";
        }
    }
});

// Game over
setInterval(() => {
    var top = parseInt(window.getComputedStyle(upcar).getPropertyValue("top"));
    var upleft = parseInt(window.getComputedStyle(upcar).getPropertyValue("left"));
    var myleft = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"));
    if (((upleft == myleft) && (top >= 240 && top <= 360)) || ((upleft == myleft) && (top >= 240 && top <= 360)) || ((upleft == myleft) && (top >= 240 && top <= 360))) {
        if (c < 10) score.innerText = "Your Score: 0" + c;
        else score.innerText = "Your Score: " + c;
        end.style.display = "flex";
        wrapper.style.display = "none";
        endsong.play();
        startsong.pause();
        midsong.pause();
        horn.pause();
    }
}, 10);