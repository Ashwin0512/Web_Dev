let boxes = document.getElementsByClassName("box")
var arr = new Array(3);

for (var i = 0; i < arr.length; i++) {
    arr[i] = [];
}

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        arr[i][j] = "0";
    }
}

for(var i=1 ; i<4 ; i++)    {
    for(var j=1 ; j<4 ; j++)    {
        let num = `${i}${j}`
        var box = document.getElementById(num)
        arr[i-1][j-1] = box
    }
}

function playComp() {
    let row = Math.floor(Math.random()*3)
    let col = Math.floor(Math.random()*3)
    var box = arr[row][col]
    box.innerHTML = "<p>o</p>"
}

for(var i=0 ; i<boxes.length ; i++) {
    boxes[i].addEventListener("click", function(e) {
        console.log(e.target)
        e.target.innerHTML = "<p>X</p>"
        playComp()
    })
}
