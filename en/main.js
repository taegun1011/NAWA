if ($(window).width() < 768) {
    $(".intro_nawa p").eq(0).html("Paper cup <br> recycling rate 1%<br> for escape")
    $(".nawa_found p").eq(2).html("NO ANSWER<br>WE ANSWER")
    $(".nawa_product h2").html("Paper Cup Collection<br>Smart Trash Can <strong>Cupggiri</strong>")
}

if ($(window).width() > 768) {
    $(".color_option span").click(function (e) {
        $(".on").removeClass("on")
        $(this).addClass("on")
        if (e.target.dataset.color == "pink") {
            $(".change_img").attr("src", "../img/nawa_cup1.png")
        }
        else if (e.target.dataset.color == "black") {
            $(".change_img").attr("src", "../img/nawa_cup1_black.png")
        }
        else if (e.target.dataset.color == "gray") {
            $(".change_img").attr("src", "../img/nawa_cup1_gray.png")
        }
    })
} else if ($(window).width() < 768 && $(window).width() > 500) {
    $(".color_option span").click(function (e) {
        $(".on").removeClass("on")
        $(this).addClass("on")
        if (e.target.dataset.color == "pink") {
            $(".nawa_product").css("background", "no-repeat center /contain url(../img/nawa_cup1.png), #f9f9f9")
        }
        else if (e.target.dataset.color == "black") {
            $(".nawa_product").css("background", "no-repeat center /contain url(../img/nawa_cup1_black.png), #f9f9f9")
        }
        else if (e.target.dataset.color == "gray") {
            $(".nawa_product").css("background", "no-repeat center /contain url(../img/nawa_cup1_gray.png), #f9f9f9")
        }
    })
}
else {
    $(".color_option span").click(function (e) {
        $(".on").removeClass("on")
        $(this).addClass("on")
        if (e.target.dataset.color == "pink") {
            $(".nawa_product").css("background", "no-repeat center /180% url(../img/nawa_cup1.png), #f9f9f9")
        }
        else if (e.target.dataset.color == "black") {
            $(".nawa_product").css("background", "no-repeat center /180% url(../img/nawa_cup1_black.png), #f9f9f9")
        }
        else if (e.target.dataset.color == "gray") {
            $(".nawa_product").css("background", "no-repeat center /180% url(../img/nawa_cup1_gray.png), #f9f9f9")
        }
    })
}

var h = $(window).height() / 2
$(window).scroll(function () {
    var t = $(window).scrollTop();
    if (t >= $(".nawa_found").offset().top - h) {
        $(".nawa_found").addClass("on")
    }
})

if ($(window).width() < 768) {
    $("header").addClass("no-bg");
    $(window).scroll(function () {
        var t = $(window).scrollTop();
        if (t >= $(".nawa_product").offset().top) {
            $("header").removeClass("no-bg")
        }
        else {
            $("header").addClass("no-bg")
        }
    })
}