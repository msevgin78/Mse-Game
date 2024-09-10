var userClickedPattern=[];


$(document).keypress(function(event){
    var a= event.key;
    if(a===a){
        var level=0; 
        $("h1").html("Level "+ level);
    }
})


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");    
    $("#"+userChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+buttonID+".mp3");
    audio.play();
   
    nextSequence(); 
});


function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=userClickedPattern[currentLevel]){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
    else{
        var sound=new Audio("sound/wrong.mp3");
        sound.play();
        $("#level-title").addclass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout (function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }


}


var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];

function nextSequence(){
    level ++;
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
}

function animatePress(currentcolour){
$("#"+currentcolour).addclass("pressed");
setTimeout(function() {
    $("#"+currentcolour).removeClass("pressed");
}, 100);
}

function startOver(){
    level =0;
    gamePattern=[];
    started=false;
}


