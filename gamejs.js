var gamepattern = [];
var level = 0;
var buttoncolors = ["red", "blue" ,"green" , "yellow"];
var userClickedPattern = [];
var started = false;

$(document).keypress(function() {
  if(started == false){
    $("#level-title").text("Level " + level);
   started = true;
    nextsequence();
  }
  
});


$(".btn").click(function(){
   
   var userChosenColour = $(this).attr("id");
   
   userClickedPattern.push(userChosenColour); 
   play(userChosenColour);
   buttonAnimation(userChosenColour);
   checkAnswer(userClickedPattern.length -1);
});
$(".btn").keypress(function(){
  
});
function checkAnswer(currentLevel){
  if(gamepattern[currentLevel] == userClickedPattern[currentLevel]){
    if(gamepattern.length == userClickedPattern.length){
      setTimeout(function() {
        nextsequence();
      }, 1000);
    }
    
  }
  else {
    play("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startover();
  }
}

function nextsequence(){
    userClickedPattern = [];
    level ++ ;
    $("#level-title").text("Level " + level);
    var random = Math.floor(Math.random() * 4);
    var randomchoosencolor = buttoncolors[random];
    gamepattern.push(randomchoosencolor);
    $("#" + randomchoosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    play(randomchoosencolor);
    
}

function play(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function buttonAnimation(currentColor) {

    
  $("#" + currentColor).addClass("pressed");

  
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
  
}

function startover(){
  level = 0;
  gamepattern = [];
  started = false;
}

