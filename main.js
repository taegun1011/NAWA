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

var auto_height = parseInt($(".video_wrap li").css("width"))
$(".video_wrap li").css("height", auto_height / 2)
// li높이 고정

var li_copy = $(".video_wrap li").slice(0, 2).clone();
$(".video_wrap").append(li_copy)
var user_w = $(".video_slide").width() / 2,
    li_length = $(".video_wrap li").length,
    li_gap = parseInt($(".video_wrap").css("gap")),
    li_width = $(".video_wrap li").width(),
    li_size = li_width + li_gap;
var li_cent = user_w - (li_width / 2) - li_width - li_gap
$(".video_wrap").css("marginLeft", li_cent)

var n = 0;
$("#vid_btn button").click(function () {
    var vid_bt = $("#vid_btn button").index(this);
    if (vid_bt == 0) {
        if (n == 0) {
            return false;
        }
        n--;
    } else {
        if (n <= li_length - 3) {
            n++;
        }
        if (n > li_length - 3) {
            n -= 1;
            return false;
        }
    }
    $(".video_wrap").stop().animate({
        marginLeft: li_cent - li_size * n
    }, 700)
});
//슬라이드