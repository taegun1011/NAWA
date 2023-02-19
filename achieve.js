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

