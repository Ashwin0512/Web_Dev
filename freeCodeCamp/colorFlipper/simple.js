const body = document.getElementById("body");
const btn = document.getElementById("btn");
const color_span = document.getElementById("color");

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

btn.addEventListener("click", function() {
    const rand = getRandomNumber();

    body.style.backgroundColor = colors[rand];
    color_span.textContent = colors[rand];
});

function getRandomNumber()  {
    return Math.floor(Math.random() * colors.length);
}