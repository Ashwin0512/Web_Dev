const ham = document.getElementById("toggle");
const links_ul = document.getElementById("links");

ham.addEventListener("click", function() {
    console.log(links_ul.classList);

    if(links_ul.classList.contains("show-links"))   {
        links_ul.classList.remove("show-links");
    }   else    {
        links_ul.classList.add("show-links");
    }

    console.log("after addition : "+links_ul.classList);
});