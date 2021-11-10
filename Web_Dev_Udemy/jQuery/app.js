$("#item-list > li[id='first-li']").css('font-size','1.2rem');
$("#item-list > li:last").css('color','green');

$("#btn").click(function() {
    $("h1").css('color','blue');
    $(".buttons").find(".click").css('background-color','pink');
    $("#item-list > li:first").children("a").css('color','red');
})

$(".submit-btn").click(function(){
    const answer = $("#answer-box").val();

    if(answer.toLowerCase()=='delhi') {
        $(".result").html('<span style="color:green">Your answer is correct :)</span>');
    } else  {
        $(".result").html('<span style="color:red">Your answer is incorrect :(');
        $(".answer").text('Correct answer is "Delhi"');
    }
})

$(".item-btn").click(function(){
    const item = $(".item-input").val();

    $(".list").append('<li>'+item+'</li>');
})

$(".fixLinks").click(function(){
    $(".link-list > li > a").attr('target','_blank');
})

$(".append").click(function(){
    $(".div-1").append($(".div-2 > p"));
})

$(".appendTo").click(function(){
    $(".div-2 > p").appendTo($(".div-1"));
})

var numList = [1,2,3,4,5,6];

$.each(numList, function(index,value) {
    console.log(index+" "+value);
})

$(".friendsList > li").eq(0).toggleClass("pinkFriend");

$(".friendsList > li").filter(".best").toggleClass("greenFriend");

$(".attach").click(function(){
    $(".testData").data({"name":"biriyani", "price":300});
});

$(".get").click(function(){
    console.log($(".testData").data("name") + " costs " + $(".testData").data("price"));
})

$(".toggleButton").click(function(){
    $(".box").toggle(500, function(){
        $(".toggleButtonText").text("Boxes were toggled.");
    });
})

$(".fadeInButton").click(function(){
    $(".box").fadeIn(500, function(){
        $(".toggleButtonText").text("Fade In Animation");
    });
})

$(".fadeOutButton").click(function(){
    $(".box").fadeOut(500, function(){
        $(".toggleButtonText").text("Fade Out Animation");
    });
})

$(".fadeToButton").click(function(){
    $(".box").fadeTo('slow',0.50,function(){
        $(".toggleButtonText").text("Fade To Animation");
    });
})

$(".slideDownButton").click(function(){
    $(".box").slideDown(500,function(){
        $(".toggleButtonText").text("Slide Down Animation");
    });
})

$(".slideUpButton").click(function(){
    $(".box").slideUp(500,function(){
        $(".toggleButtonText").text("Slide Up Animation");
    });
})

$(".slideToggleButton").click(function(){
    $(".box").slideToggle(500,function(){
        $(".toggleButtonText").text("Slide Toggle Animation");
    });
})

$(".animateButton").click(function(){
    $(".box").animate({
        "height":"300px",
        'opacity':'0.8'
    },1000,function(){
        $(".toggleButtonText").text("Boxes were Animated");
    });
})

$(".coloredBox").on({
    mouseenter: function(event) {
        console.log("colored box was entered");
        $(this).css('background','pink');
        console.log(event);
    },
    mouseleave: function() {
        console.log("colored box was exitted");
        $(this).css('background','skyblue');
    },
    click: function() {
        console.log("colored box was clicked");
        $(this).text("You clicked me !!");
    }
})