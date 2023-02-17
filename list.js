var list = [];

$.get('list.json').then((data) => {
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
    })


    var number1 = [],
        number2 = [],
        number3 = []; // 보관함 생성(9개씩 나눠서 보관, 필요시 더 number4..5등 추가해야함)

    $(".card").each(function (index, item) {
        let n = $(item).data('id');
        if (n >= 0 && n < 9) {
            $(item).hide()
            number1.push(item);
        } else if (n >= 9 && n < 18) {
            $(item).hide()
            number2.push(item);
        } else if (n >= 18 && n < 27) {
            number3.push(item);
        }
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

    $(".index span").click(function (e) {
        $(".on").removeClass("on")
        $(this).addClass("on")

        if (e.target.innerText == "1") {
            makeBlock(...number3);
            makeNone(...number2);
            makeNone(...number1);
        }
        if (e.target.innerText == "2") {
            makeNone(...number1);
            makeBlock(...number2);
            makeNone(...number3);
        }
        if (e.target.innerText == "3") {
            makeBlock(...number1);
            makeNone(...number2);
            makeNone(...number3);
        }
    })

})