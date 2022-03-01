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

// Game Start
startbtn.addEventListener("click", () => {
  midsong.play();
  startsong.pause();
  begin.style.display = "none";
  wrapper.style.display = "flex";
})

// upcomming car Animation path change
upcar.addEventListener("animationiteration", () => {
  var ran = Math.floor(Math.random() * 3) * 10 + 40;
  upcar.style.left = ran + "%";
  c++;
});

// My car Animation path change
window.addEventListener("keydown", (e) => {
  horn.play();
  if (e.keyCode == 37) {
    console.log("left");
    if (dis > 40) {
      dis -= 10;
      mycar.style.left = dis + "%";
    }
  }
  else if (e.keyCode == 39) {
    console.log("right");
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