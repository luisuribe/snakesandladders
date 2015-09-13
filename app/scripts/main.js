/*external js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

var grid = {
    "1": { "x": '105px', "y": '-15px'},
    "2": { "x": '175px', "y": '-15px'},
    "3": { "x": '245px', "y": '-15px'},
    "4": { "x": '305px', "y": '-15px'},
    "5": { "x": '370px', "y": '-15px'},
    "6": { "x": '435px', "y": '-15px'},
    "7": { "x": '500px', "y": '-15px'},
    "8": { "x": '575px', "y": '-15px'},
    "9": { "x": '640px', "y": '-15px'},
    "10": { "x": '705px', "y": '-15px'},
};

window.onload = function() {
    var $box = document.getElementById("box");

    console.log($box);

    $("#dice").click(function(){
        var to = Math.floor((Math.random() * 4) + 1);
        console.log(to);
        moveTween(to);
    });

    var moveTween = function(to){
        TweenLite.to($box, 0.7, grid[to]);
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