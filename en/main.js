if ($(window).width() < 768) {
    $(".intro_nawa p").eq(0).html("Paper cup <br> recycling rate 1%<br> for escape")
    $(".intro_nawa p").eq(1).html("It's about a problem that others couldn't answer<br>To give an answer, 10 students gathered<br>and NAWA was born")
    $(".nawa_found p").eq(2).html("NO ANSWER<br>WE ANSWER")
    $(".nawa_product h2").html("Paper Cup Collection<br>Smart Trash Can <strong>Cupggiri</strong>")
}
$(".color_option span").click(function (e) {
    $(".on").removeClass("on")
    $(this).addClass("on")
    if (e.target.dataset.color == "blue") {
        $(".change_img").attr("src", "img/nawa_cup1.png")
    }
    else if (e.target.dataset.color == "mint") {
        $(".change_img").attr("src", "img/nawa_cup1_mint.png")
    }
    else if (e.target.dataset.color == "purple") {
        $(".change_img").attr("src", "img/nawa_cup1_purple.png")
    }
})

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