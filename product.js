var h = $(window).height() / 2
$(window).scroll(function () {
    var t = $(window).scrollTop();
    if (t > $(".question").offset().top - h) {
        $(".question").addClass("on")
    }
    if (t > $(".process").offset().top - h) {
        $(".process").addClass("on")
    }
    if (t > 1500) {
        $(".situ .rise1, .situ .rise2, .situ .rise3").addClass("rise")
    }

    if (t > 2000) {
        $(".product_2 .rise1, .product_2 .rise2").addClass("rise")
    }

    if (t > 2900) {
        $(".NAWA_process .rise1").addClass("rise")
    }

    if (t > 3100) {
        $(".NAWA_process .rise2").addClass("rise")
    }
})

$(".color_option span").click(function (e) {
    $(".on").removeClass("on")
    $(ttis).addClass("on")
    if (e.target.dataset.color == "pink") {
        $(".ctange_img").attr("src", "img/nawa_cup1.png")
    }
    if (e.target.dataset.color == "black") {
        $(".ctange_img").attr("src", "img/nawa_cup1_black.png")
    }
    if (e.target.dataset.color == "gray") {
        $(".ctange_img").attr("src", "img/nawa_cup1_gray.png")
    }
})