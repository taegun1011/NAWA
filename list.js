var list = [];

$.get('list.json').done((data) => {
    list = data.articles;

    list.forEach(function (a) {
        $('.article-list').append(
            `<li class="card" data-id="${a['id']}">
                            <a href="${a['href']}" target = "_blank">
                            <img src="${a['src']}" alt="기사 사진">
                            <span class="title">${a['title']}
                                <span class="info">${a['info']}</span>
                            </span>
                            </a>
                         </li>`)
    });

    var article = [] // 보관함 생성

    $(".card").each(function (index, item) {
        article.push(item);
    })

    function makeBlock(...rest) {
        return rest.forEach(function (a, i) {
            a.style.display = 'block'
        })
    } // css block 변경함수

    function makeNone(...rest) {
        return rest.forEach(function (a, i) {
            a.style.display = 'none'
        })
    } //css none 변경함수

    if ($(window).width() > 767) {
        makeNone(...article);
        makeBlock(...article.slice(0, 9)); // 웹버전일때 

        $(".index span").click(function (e) {
            $(".on").removeClass("on")
            $(this).addClass("on")
            if (e.target.innerText == "1") {
                makeNone(...article);
                makeBlock(...article.slice(0, 9));
            }
            if (e.target.innerText == "2") {
                makeNone(...article);
                makeBlock(...article.slice(9, 18));
            }
            if (e.target.innerText == "3") {
                makeNone(...article);
                makeBlock(...article.slice(18, 27));
            }
            if (e.target.innerText == "4") {
                makeNone(...article);
                makeBlock(...article.slice(27, 36));
            }
        })
    } else {
        // $(".index").append(`<span>4</span>`) // 인덱스 숫자추가

        makeNone(...article);
        makeBlock(...article.slice(0, 8)); // 모바일일때 

        $(".index span").click(function (e) {
            $(".on").removeClass("on")
            $(this).addClass("on")
            if (e.target.innerText == "1") {
                makeNone(...article);
                makeBlock(...article.slice(0, 8));
            }
            if (e.target.innerText == "2") {
                makeNone(...article);
                makeBlock(...article.slice(8, 16));
            }
            if (e.target.innerText == "3") {
                makeNone(...article);
                makeBlock(...article.slice(16, 24));
            }
            if (e.target.innerText == "4") {
                makeNone(...article);
                makeBlock(...article.slice(24, 32));
            }
        })
    }
}).fail(function () {
    $('.article-list').css('display', 'block')
    $('.article-list').append("<p style='text-align:center; font-size:16px; font-weight:bold; color:red;'>현재 준비중입니다.</p>")
})