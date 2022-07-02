var buttonColours = ["red","blue","green","yellow"];
var pattern = [];
function playSound(color){
    let sound = new Audio(`sounds/${color}.mp3`);
    sound.play();
    $(`#${color}`).fadeOut(150);
    $(`#${color}`).fadeIn(150);
    // $(`#${color}`).addClass("clicked");
}
var level = 0;
var started = false;
$(document).keypress(function(){
    if(!started){
        $("h1").text("Level 0");
        nextSequence();
        started = true;
    }
    else{
        started = false;
        location.reload();
    }
    
})
function nextSequence(){
    level+=1;
    $("h1").text(`Level ${level}`);    
    let v = Math.floor(4*Math.random());
    pattern.push(buttonColours[v]);
    let coloradded = pattern[pattern.length-1];
    playSound(coloradded);
    // checkAnswer(level);
}
var userClicked = [];
$(".btn").click(function(){
    let colorclicked = this.getAttribute("id");
    userClicked.push(colorclicked);
    playSound(colorclicked);
    setTimeout(() => {
        // if(userClicked.length == level){
        //     checkAnswer(level);
        // }
        checkAnswer(level);
    }, 500);
    console.log(userClicked);
});
// $(".container").addClass("hehe");
function checkAnswer(currLevel){
    if(currLevel == userClicked.length && userClicked[currLevel-1] == pattern[currLevel-1]){
       userClicked.length=0;
       nextSequence();
   }
   else if(userClicked[userClicked.length-1] != pattern[userClicked.length-1] && userClicked.length <= currLevel){
        $("h1").html(`Game Over <br><span style="color:black;">Your Score : ${currLevel-1}</span><br>Press any key to Restart`); 
        playSound("wrong");
        addclass();
   }
}
function addclass(){
    $(".container").addClass("hehe");
    setTimeout(() => {
        $(".container").removeClass("hehe");
    }, 50);
}
