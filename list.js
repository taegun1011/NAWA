var list = [];

class Article {
    constructor(href, src, title, info) {
        this.href = href;
        this.src = src;
        this.title = title;
        this.info = info;
    }
    addArti = function () {
        list.push(this); // array에 인스턴스 추가해주기
    }
}

let test = new Article('http://www.veritas-a.com/news/articleView.html?idxno=441707', 'img/article/221221베리타스에이.jpg', 'NAWA팀<br>하나 소셜벤처 유니버시티​<br>최우수상 수상', '베리타스알파 22.12.21.')

let test2 = new Article('http://www.veritas-a.com/news/articleView.html?idxno=441707', 'img/article/221221베리타스에이.jpg', 'NAWA팀<br>하나 소셜벤처 유니버시티​<br>최우12312321수상 수상', '베리타스알파 22.112.21.')
test.addArti();
test2.addArti();

// for (let i = 0; i < 2; i++) {
//     (test + i).addArti();
// }

list.forEach(function (a, i) {
    let news = `<li class="card ind_1">
                <a href="${a['href']}" target = "_blank">
                <img src="${a['src']}" alt="기사 사진">
                <span class="title">${a['title']}
                    <span class="info">${a['info']}</span>
                </span>
                </a>
             </li>`;
    console.log(news)
    $(".article-list").append(news)
});

// if ($(".article-list").children('li').length % 10 === 9) {
//     alert();
// }
