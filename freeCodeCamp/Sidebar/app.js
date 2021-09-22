const ham = document.getElementById("ham");
const bar_div = document.getElementById("bar");
const cross = document.getElementById("cross");

ham.addEventListener("click", function() {
    const bool = bar_div.classList.contains("show");

    console.log(bool);
    if(bool)    {
        bar_div.classList.remove("show");
    }  else {
        bar_div.classList.add("show");
    }
});

cross.addEventListener("click", function() {
    bar_div.classList.remove("show");
})