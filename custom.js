$("header ul li").on({
    "mouseover": function () {
        $("header").addClass("on")
    }, "mouseout": function () {
        $("header").removeClass("on")
    }
})
