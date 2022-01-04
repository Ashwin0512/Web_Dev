const buttonColours = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence () {
    let randomNumber = Math.floor(Math.random()*4);

    let randomChosenColour = buttonColours[nextSequence()];

    gamePattern.push(randomChosenColour);   

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    return randomNumber;
}

$(".btn").click(function() {
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
})

function playSound(name) {
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}