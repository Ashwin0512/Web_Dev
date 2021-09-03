let userScore = 0, compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector("scoreboard");
const result_p = document.querySelector(".result > p");
const rockImage_div = document.getElementById("r");
const paperImage_div = document.getElementById("p");
const scissorImage_div = document.getElementById("s");
const img_img = document.querySelectorAll(".img");
const message_div = document.querySelector(".message");

function getComputerChoice()    {
    const computerChoice = ['r','p','s'];
    return computerChoice[Math.floor(Math.random()*3)];
}

function user_win(userChoice)  {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);
}

function computer_win(userChoice)    {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);
}

function draw(userChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300);
}

function shortToFull(choice)   {
    if(choice==='r')    {
        return "Rock";
    }   else if(choice==='s')   {
        return "Scissors";
    }   else if(choice==='p')   {
        return "Paper";
    }   else    {
        return "#ERROR";
    }
}

function printMessage(compChoice,userChoice)    {
    comp = shortToFull(compChoice);
    user = shortToFull(userChoice);
    smallUser = "user".fontsize(4).sub();
    smallComp = "comp".fontsize(4).sub();
    switch(compChoice+userChoice)   {
        case 'rs':
        case 'pr':
        case 'sp':
            result_p.innerHTML = `${user}${smallUser} looses to ${comp}${smallComp} . You loose 😢`;
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            result_p.innerHTML = `${user}${smallUser} beats ${comp}${smallComp} . You win 🥵`;
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            result_p.innerHTML = `Clashes Neutralize !! It's a draw 😶`;
            break;
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(computerChoice+userChoice)   {
        case 'rs':
        case 'pr':
        case 'sp':
            printMessage(computerChoice,userChoice);
            computer_win(userChoice);
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            printMessage(computerChoice,userChoice);
            user_win(userChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            printMessage(computerChoice,userChoice);
            draw(userChoice);
            break;
    }

}

// function main() {
    rockImage_div.addEventListener('click', function() {
        game("r");
    });

    paperImage_div.addEventListener('click', function() {
        game("p");
    });

    scissorImage_div.addEventListener('click', function() {
        game("s");
    });
// }

// main();