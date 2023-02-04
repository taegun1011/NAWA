$(window).scroll(function () {
    var h = $(window).scrollTop();
    if (h > 300) {
        $(".question>.rise1, .question>.rise2, .question>.rise3").addClass("rise")
    }
    if (h > 950) {
        $(".process>.rise1, .process .rise2").addClass("rise")
    }
    if (h > 1500) {
        $(".situ .rise1, .situ .rise2, .situ .rise3").addClass("rise")
    }

    if (h > 2000) {
        $(".product_2 .rise1, .product_2 .rise2").addClass("rise")
    }

    if (h > 2900) {
        $(".NAWA_process .rise1").addClass("rise")
    }

    if (h > 3100) {
        $(".NAWA_process .rise2").addClass("rise")
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