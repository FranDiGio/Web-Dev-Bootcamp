var sequence = [];
var userSequence = [];
var level = 0;
var gameIsOn = false;

$(document).on("keydown", function(event) {
    if (event.key === "a"){
        start();
    }
});

function start() {
    if (!gameIsOn){
        gameIsOn = true;
        sequence = [];
        level = 1;
    }
    getNextSequence();
}

function getNextSequence() {
    userSequence = [];
    $("h1").text("Level " + level);
    var color = ["green", "red", "yellow", "blue"];
    var selection = Math.floor(Math.random() * 4);

    sequence.push(color[selection]);
    highlightColor(color[selection]);
    playSound(color[selection]);
    level++;
}

function highlightColor (color) {
    $("." + color).addClass("highlighted");
    setTimeout(function (){
        $("." + color).removeClass("highlighted");
    }, 200);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel) {

    if (sequence[currentLevel] === userSequence[currentLevel]) {
      if (userSequence.length === sequence.length){
        setTimeout(function () {
          getNextSequence();
        }, 1000);
      }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        gameIsOn = false;
    }
}

function animatePress(color){
    $("." + color).addClass("pressed");
    setTimeout(function (){
        $("." + color).removeClass("pressed");
    }, 200);
}

$(".btn").on("click", function(event){
    var userColor = event.currentTarget.id
    userSequence.push(userColor);

    playSound(userColor);
    animatePress(userColor);
    checkAnswer(userSequence.length-1);
});






