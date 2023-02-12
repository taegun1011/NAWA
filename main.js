if ($(window).width() < 768) {
    $(".intro_nawa p").eq(1).html("남들이 답을 내릴 수 없었던 문제에 대한<br>답을 내기 위해 학생 10명이 모여<br>NAWA가 탄생했습니다")
    $(".nawa_found p").eq(2).html("NO ANSWER<br>WE ANSWER")
    $(".with_nawa p").eq(0).html("지속가능한 미래를 위해<br>상생협력을 추구하는 기업들과 함께합니다")
    $(".nawa_product h2").html("종이컵 수거<br>스마트 쓰레기통<br><strong>컵끼리</strong>")
    $(".we_nawa h2").html("HOW TO PROCESS")
}

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

// var user_width = $(window).width() / 1.5;
// $(".video_wrap li").css("width", user_width)
// $(".video_wrap li").css("height", user_width * 9 / 16)
// // li크기 고정

// var li_copy = $(".video_wrap li").slice(0, 2).clone();
// $(".video_wrap").append(li_copy)
// var user_w = $(".video_slide").width() / 2,
//     li_length = $(".video_wrap li").length,
//     li_gap = parseInt($(".video_wrap").css("gap")),
//     li_width = $(".video_wrap li").width(),
//     li_height = $(".video_wrap li").height(),
//     li_size = li_width + li_gap;
// var li_cent = user_w - (li_width / 2) - li_width - li_gap
// $(".video_wrap").css("marginLeft", li_cent)

// $("#vid_btn").css("width", li_width)
// // 버튼 크기 고정

// var n = 0;
// $("#vid_btn button").click(function () {
//     var vid_bt = $("#vid_btn button").index(this);
//     if (vid_bt == 0) {
//         if (n == 0) {
//             return false;
//         }
//         n--;
//     } else {
//         if (n <= li_length - 3) {
//             n++;
//         }
//         if (n > li_length - 3) {
//             n -= 1;
//             return false;
//         }
//     }
//     $(".video_wrap").stop().animate({
//         marginLeft: li_cent - li_size * n
//     }, 700)
// });
// //슬라이드