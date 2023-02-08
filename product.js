var h = $(window).height() / 2
$(window).scroll(function () {
    var t = $(window).scrollTop();
    if (t > $(".question").offset().top - h) {
        $(".question").addClass("on")
    }
    if (t > $(".process").offset().top - h) {
        $(".process").addClass("on")
    }
    if (t > $(".situ").offset().top - h) {
        $(".situ").addClass("on")
    }
    if (t > $(".product_2").offset().top - h) {
        $(".product_2").addClass("on")
    }
    if (t > $(".process_2").offset().top - h) {
        $(".process_2").addClass("on")
    }
})

$(".color_option span").click(function (e) {
    $(".on").removeClass("on")
    $(this).addClass("on")
    if (e.target.dataset.color == "pink") {
        $(".change_img").attr("src", "img/nawa_cup1.png")
    }
    if (e.target.dataset.color == "black") {
        $(".change_img").attr("src", "img/nawa_cup1_black.png")
    }
    if (e.target.dataset.color == "gray") {
        $(".change_img").attr("src", "img/nawa_cup1_gray.png")
    }
})