var h = $(window).height() / 2
$(window).scroll(function () {
    var t = $(window).scrollTop();
    if (t > $(".question").offset().top - h) {
        $(".question").addClass("on")
    }
    if (t > $(".process").offset().top - h) {
        $(".process").addClass("on")
    }
    if (t > $(".situ").offset().top - h) {
        $(".situ").addClass("on")
    }
    if (t > $(".product_2").offset().top - h) {
        $(".product_2").addClass("on")
    }
    if (t > $(".process_2").offset().top - h) {
        $(".process_2").addClass("on")
    }
    if (t > $(".situ").offset().top) {
        $("header").addClass("no-bg")
    }
    else {
        $("header").removeClass("no-bg")
    }
})

$(".color_option span").click(function (e) {
    $(".on").removeClass("on")
    $(this).addClass("on")
    if (e.target.dataset.color == "blue") {
        $(".change_img").attr("src", "img/nawa_cup1.png")
    }
    else if (e.target.dataset.color == "mint") {
        $(".change_img").attr("src", "img/nawa_cup1_mint.png")
    }
    else if (e.target.dataset.color == "purple") {
        $(".change_img").attr("src", "img/nawa_cup1_purple.png")
    }
})

if ($(window).width() < 768) {
    $(".nawa_product h2").html("Paper Cup Collection<br>Smart Trash Can <strong>Cupggiri</strong>")
}

var changeSitu = `<div class="change-situ">
<p>Recycling paper cups...<br>
It's a complicated process.</p>
<ol>
<li><span>Clean cleaning<br>+<br>Gathering cups together.</span></li>
<li><span>Lots of paper cup recovery people</span></li>
<li><span>Cooperation with recycling companies</span></li>
</ol>
<p>
<span>Because of the complicated process,</span>
<span>About 23 billion paper cups used per year</span>
<span>Average annual paper cup recycling rate</span>
<span>Just,<strong>1%</strong></span>
</p>
</div>`;
if ($(window).width() < 500) {
    $(".question p:nth-of-type(2)").html("Putting paper together<br>and throwing it away?<br>Throw it away with waste paper?<br>Classifying it as general garbage?")
    $(".filter").prepend(changeSitu)
}