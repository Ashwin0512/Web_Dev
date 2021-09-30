const open_btn = document.getElementById("btn");
const cross = document.getElementById("cross");
const container = document.getElementById("container");

open_btn.addEventListener("click", function () {
    container.style.visibility = "visible";
});

cross.addEventListener("click", function()  {
    container.style.visibility = "hidden";
    console.log(container.style.visibility);
});