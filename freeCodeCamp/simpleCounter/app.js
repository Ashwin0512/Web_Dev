const num = document.getElementById("num");
const dec_btn = document.getElementById("dec");
const reset_btn = document.getElementById("reset");
const inc_btn = document.getElementById("inc");
let number = 0;


dec_btn.addEventListener("click", function() {
    number--;
    num.innerHTML = number;
    num.style.color = numColor(number);
});

inc_btn.addEventListener("click", function() {
    number++;
    num.innerHTML = number;
    num.style.color = numColor(number);
});

reset_btn.addEventListener("click", function() {
    number = 0;
    num.innerHTML = number;
    num.style.color = numColor(number);
});

function numColor(number) {
    if(number<0)    {
        return "red";
    } else if(number==0)    {
        return "black";
    }   else    {
        return "green";
    }
}



