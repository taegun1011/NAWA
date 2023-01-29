$(".color_option span").click(function (e) {
    $(".on").removeClass("on")
    $(this).addClass("on")
    if(e.target.dataset.color == "pink") {
        $(".change_img").attr("src","img/nawa_cup1.png")
    }
    if(e.target.dataset.color == "black") {
        $(".change_img").attr("src","img/nawa_cup1_black.png")
    }
    if(e.target.dataset.color == "gray") {
        $(".change_img").attr("src","img/nawa_cup1_gray.png")
    }
})