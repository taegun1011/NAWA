$(".comp").click(function () {
    $(".list").css("display", "block")
    $(".list").nextAll().css("display", "none")
})
$(".arti").click(function () {
    $(".list_2").css("display", "block")
    $(".list,.list_3").css("display", "none")
})
$(".trop").click(function () {
    $(".list_3").css("display", "block")
    $(".list_3").prevAll().not(".top, .filter").css("display", "none")
})

$(".index span").click(function (e) {
    $(".on").removeClass("on")
    $(this).addClass("on")
    if (e.target.innerText == "1") {
        $(".ind_1").css("display", "flex")
        $(".ind_2,.ind_3").css("display", "none")
    }
    if (e.target.innerText == "2") {
        $(".ind_2").css("display", "flex")
        $(".ind_1,.ind_3").css("display", "none")
    }
    if (e.target.innerText == "3") {
        $(".ind_3").css("display", "flex")
        $(".ind_1,.ind_2").css("display", "none")
    }
})
