$("header ul").on({
    "mouseover": function () {
        $("header").addClass("on")
        $(".main_logo").addClass("on")
    }, "mouseout": function () {
        $("header").removeClass("on")
        $(".main_logo").removeClass("on")
    }
})
$(".open-btn").click(function () {
    $(this).css("display","none")
    $("header").addClass("on")
    $("header ul").css("display", "flex")
    $(".close-btn").css("display", "block")
})
$(".close-btn").click(function () {
    $(this).css("display","none")
    $("header").removeClass("on")
    $("header ul").css("display", "none")
    $(".open-btn").css("display", "block")
})
//메뉴 열고닫기