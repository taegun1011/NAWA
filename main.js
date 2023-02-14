if ($(window).width() < 768) {
    $(".intro_nawa p").eq(1).html("남들이 답을 내릴 수 없었던 문제에 대한<br>답을 내기 위해 학생 10명이 모여<br>NAWA가 탄생했습니다")
    $(".nawa_found p").eq(2).html("NO ANSWER<br>WE ANSWER")
    $(".with_nawa p").eq(0).html("지속가능한 미래를 위해<br>상생협력을 추구하는 기업들과 함께합니다")
    $(".we_nawa h2").html("HOW TO PROCESS")
}

if ($(window).width() > 768) {
    $(".color_option span").click(function (e) {
        $(".on").removeClass("on")
        $(this).addClass("on")
        if (e.target.dataset.color == "pink") {
            $(".change_img").attr("src", "img/nawa_cup1.png")
        }
        else if (e.target.dataset.color == "black") {
            $(".change_img").attr("src", "img/nawa_cup1_black.png")
        }
        else if (e.target.dataset.color == "gray") {
            $(".change_img").attr("src", "img/nawa_cup1_gray.png")
        }
    })
} else {
    $(".color_option span").click(function (e) {
        $(".on").removeClass("on")
        $(this).addClass("on")
        if (e.target.dataset.color == "pink") {
            $(".nawa_product").css("background", "no-repeat center /180% url(img/nawa_cup1.png), #f5f5f5")
        }
        else if (e.target.dataset.color == "black") {
            $(".nawa_product").css("background", "no-repeat center /180% url(img/nawa_cup1_black.png), #f5f5f5")
        }
        else if (e.target.dataset.color == "gray") {
            $(".nawa_product").css("background", "no-repeat center /180% url(img/nawa_cup1_gray.png), #f5f5f5")
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