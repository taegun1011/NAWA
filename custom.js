$("header ul").on({
    "mouseover": function () {
        $("header").addClass("on")
        $(".main_logo").addClass("on")
    }, "mouseout": function () {
        $("header").removeClass("on")
        $(".main_logo").removeClass("on")
    }
})