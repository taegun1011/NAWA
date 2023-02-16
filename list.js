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

    $(".card").each(function (index, item) {
        let n = $(item).data('id');
        if (n <= 9 && n > 0) {
            var number1 = $(item);
            console.log(number1)
        }
    })
})