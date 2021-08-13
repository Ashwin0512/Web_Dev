// Identifies button press

for(var i=0; i<document.querySelectorAll(".drum").length ; i++)  {
    document.querySelectorAll(".drum")[i].addEventListener("click",function()   {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    });
}

// Identifies  keyboard press

document.addEventListener("keydown",function(event)  {
    makeSound(event.key);
});


// This function Makes sound

function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            // document.querySelector(".w").style.borderColor = "#da0464bc";
        break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            // document.querySelector(".a").style.borderColor = "#da0464bc";
        break;
        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            // document.querySelector(".s").style.borderColor = "#da0464bc";
        break;
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            // document.querySelector(".d").style.borderColor = "#da0464bc";
        break;
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            // document.querySelector(".j").style.borderColor = "#da0464bc";
        break;
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            // document.querySelector(".k").style.borderColor = "#da0464bc";
        break;
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            // document.querySelector(".l").style.borderColor = "#da0464bc";
        break;
        default:
            console.log(buttonInnerHTML);
        break;
    }
}