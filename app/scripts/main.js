/*external js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

var grid = {
    "1": { x: '30px', y: '-10px'},
    "2": { x: '90px', y: '-10px'},
    "3": { x: '150px', y: '-10px'},
    "4": { x: '210px', y: '-10px'},
    "5": { x: '270px', y: '-10px'},
    "6": { x: '330px', y: '-10px'},
    "7": { x: '390px', y: '-10px'},
    "8": { x: '450px', y: '-10px'},
    "9": { x: '510px', y: '-10px'},
    "10": { x: '570px', y: '-10px'},

    "20": { x: '30px', y: '-70px'},
    "19": { x: '90px', y: '-70px'},
    "18": { x: '150px', y: '-70px'},
    "17": { x: '210px', y: '-70px'},
    "16": { x: '270px', y: '-70px'},
    "15": { x: '330px', y: '-70px'},
    "14": { x: '390px', y: '-70px'},
    "13": { x: '450px', y: '-70px'},
    "12": { x: '510px', y: '-70px'},
    "11": { x: '570px', y: '-70px'},

    "21": { x: '30px', y: '-130px'},
    "22": { x: '90px', y: '-130px'},
    "23": { x: '150px', y: '-130px'},
    "24": { x: '210px', y: '-130px'},
    "25": { x: '270px', y: '-130px'},
    "26": { x: '330px', y: '-130px'},
    "27": { x: '390px', y: '-130px'},
    "28": { x: '450px', y: '-130px'},
    "29": { x: '510px', y: '-130px'},
    "30": { x: '570px', y: '-130px'},

    "40": { x: '30px', y: '-190px'},
    "39": { x: '90px', y: '-190px'},
    "38": { x: '150px', y: '-190px'},
    "37": { x: '210px', y: '-190px'},
    "36": { x: '270px', y: '-190px'},
    "35": { x: '330px', y: '-190px'},
    "34": { x: '390px', y: '-190px'},
    "33": { x: '450px', y: '-190px'},
    "32": { x: '510px', y: '-190px'},
    "31": { x: '570px', y: '-190px'},

    "41": { x: '30px', y: '-250px'},
    "42": { x: '90px', y: '-250px'},
    "43": { x: '150px', y: '-250px'},
    "44": { x: '210px', y: '-250px'},
    "45": { x: '270px', y: '-250px'},
    "46": { x: '330px', y: '-250px'},
    "47": { x: '390px', y: '-250px'},
    "48": { x: '450px', y: '-250px'},
    "49": { x: '510px', y: '-250px'},
    "50": { x: '570px', y: '-250px'},

    "60": { x: '30px', y: '-310px'},
    "59": { x: '90px', y: '-310px'},
    "58": { x: '150px', y: '-310px'},
    "57": { x: '210px', y: '-310px'},
    "56": { x: '270px', y: '-310px'},
    "55": { x: '330px', y: '-310px'},
    "54": { x: '390px', y: '-310px'},
    "53": { x: '450px', y: '-310px'},
    "52": { x: '510px', y: '-310px'},
    "51": { x: '570px', y: '-310px'},

    "61": { x: '30px', y: '-370px'},
    "62": { x: '90px', y: '-370px'},
    "63": { x: '150px', y: '-370px'},
    "64": { x: '210px', y: '-370px'},
    "65": { x: '270px', y: '-370px'},
    "66": { x: '330px', y: '-370px'},
    "67": { x: '390px', y: '-370px'},
    "68": { x: '450px', y: '-370px'},
    "69": { x: '510px', y: '-370px'},
    "70": { x: '570px', y: '-370px'},

    "80": { x: '30px', y: '-430px'},
    "79": { x: '90px', y: '-430px'},
    "78": { x: '150px', y: '-430px'},
    "77": { x: '210px', y: '-430px'},
    "76": { x: '270px', y: '-430px'},
    "75": { x: '330px', y: '-430px'},
    "74": { x: '390px', y: '-430px'},
    "73": { x: '450px', y: '-430px'},
    "72": { x: '510px', y: '-430px'},
    "71": { x: '570px', y: '-430px'},

};

window.onload = function() {
    var box1          = document.getElementById("box1");
    var box1_position = 0;

    $("#dice1").click(function(){
        var to = Math.floor((Math.random() * 6) + 1);
        console.log(to);
        box1_position = box1_position + to;
        console.log(box1_position);
        moveTween(box1_position);
    });

    var moveTween = function(to){
        TweenLite.to(box1, 0.7, grid[to]);
    }


    // TweenLite.to($box, 2, {x: 150});
    // TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
    // TweenLite.to($box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
    // TweenLite.to($box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
    // TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
    // TweenLite.to($box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
    // TweenLite.to($box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});


  // var   logo               = document.getElementById("logo"),
  //       playBtn            = document.getElementById("playBtn"),
  //       pauseBtn           = document.getElementById("pauseBtn"),
  //       resumeBtn          = document.getElementById("resumeBtn"),
  //       reverseBtn         = document.getElementById("reverseBtn"),
  //       playFromBtn        = document.getElementById("playFromBtn"),
  //       reverseFromBtn     = document.getElementById("reverseFromBtn"),
  //       seekBtn            = document.getElementById("seekBtn"),
  //       timeScaleSlowBtn   = document.getElementById("timeScaleSlowBtn"),
  //       timeScaleNormalBtn = document.getElementById("timeScaleNormalBtn"),
  //       timeScaleFastBtn   = document.getElementById("timeScaleFastBtn"),
  //       restartBtn         = document.getElementById("restartBtn"),
  //       diceBtn            = document.getElementById("diceBtn"),

  //   tween = TweenLite.to(logo, 6, {
  //     left: "632px",
  //     ease: Linear.easeNone
  //   });

  // diceBtn.onclick = function() {
  //   tween.to()
  // }

  // playBtn.onclick = function() {
  //   //Play the tween forward from the current position.
  //   //If tween is complete, play() will have no effect
  //   tween.play();
  // }
  // pauseBtn.onclick = function() {
  //   tween.pause();
  // }
  // resumeBtn.onclick = function() {
  //   //Resume playback in current direction.
  //   tween.resume();
  // }
  // reverseBtn.onclick = function() {
  //   tween.reverse();
  // }
  // playFromBtn.onclick = function() {
  //   //Play from a sepcified time (in seconds).
  //   tween.play(5);
  // }
  // reverseFromBtn.onclick = function() {
  //   //Reverse from a specified time (in seconds).
  //   tween.reverse(1);
  // }
  // seekBtn.onclick = function() {
  //   //Jump to specificied time (in seconds) without affecting
  //   //whether or not the tween is paused or reversed.
  //   tween.seek(3);
  // }
  // timeScaleSlowBtn.onclick = function() {
  //   //timescale of 0.5 will make the tween play at half-speed (slower).
  //   //Tween will take 12 seconds to complete (normal duration is 6 seconds).
  //   tween.timeScale(0.5);
  // }
  // timeScaleNormalBtn.onclick = function() {
  //   //timescale of 1 will make tween play at normal speed.
  //   tween.timeScale(1);
  // }
  // timeScaleFastBtn.onclick = function() {
  //   //timescale of 1 will make the tween play at double-speed (faster).
  //   //Tween will take 3 seconds to complete (normal duration is 6 seconds).
  //   tween.timeScale(2);
  // }
  // restartBtn.onclick = function() {
  //   //Start playing from a progress of 0.
  //   tween.restart();
  // }
}