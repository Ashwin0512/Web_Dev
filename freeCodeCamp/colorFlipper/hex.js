const body = document.getElementById("body");
const btn = document.getElementById("btn")
const color_span = document.getElementById("color");

btn.addEventListener("click", function() {
    const rand = generateRandomColor();
    
    body.style.backgroundColor = rand;
    color_span.textContent = rand;
});

function generateRandomColor()  {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    console.log('#' + n.slice(0, 6));
    return '#' + n.slice(0, 6);
}