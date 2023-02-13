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
    if (t > $(".process").offset().top && t < $(".product_2").offset().top) {
        $("header").addClass("no-bg")
    }
    else {
        $("header").removeClass("no-bg")
    }
})

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
            $(".nawa_product").css("background", "no-repeat center /contain url(img/nawa_cup1.png), #f5f5f5")
        }
        else if (e.target.dataset.color == "black") {
            $(".nawa_product").css("background", "no-repeat center /contain url(img/nawa_cup1_black.png), #f5f5f5")
        }
        else if (e.target.dataset.color == "gray") {
            $(".nawa_product").css("background", "no-repeat center /contain url(img/nawa_cup1_gray.png), #f5f5f5")
        }
    })
}

var changeSitu = `<div class="change-situ">
<p>종이컵 재활용에는<br>복잡한 과정이 필요합니다</p>
<ol>
<li><span>깨끗한 세척<br>+<br>컵끼리 모으기</span></li>
<li><span>대량의<br>종이컵 회수<br>가능 인력</span></li>
<li><span>종이컵<br>재활용 업체와의<br>협력</span></li>
</ol>
<p>
<span>복잡한 과정 때문에</span>
<span>1년 종이컵 사용량 약 230억 개 기준</span>
<span>연 평균 종이컵 재활용률</span>
<span>단,<strong>1%</strong></span>
</p>
</div>`;
if ($(window).width() < 500) {
    $(".question p:nth-of-type(2)").html("종이끼리 같이 모아서 버리기?<br>폐지와 같이 버리기?<br>일반쓰레기로 분류하기?")
    $(".filter").prepend(changeSitu)
    $(".process_2 p").html("HOW TO PROCESS")
}