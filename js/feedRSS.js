/*
This file contains the js code to fetch and populate the news component of the home page.
*/

function formatDate(dateString) {
    publishedAtDate = new Date(Date.parse(dateString));

    const dateFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return publishedAtDate.toLocaleString('es-ES', dateFormatOptions);
}

fetch('../data/news.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("myData");

    for (var i = 0; i < (data.articles.length); i++) {
        if (i === 4) { break; }

        var div = document.createElement("div");
        div.classList.add('card', 'm-1');

        var a = document.createElement("a");
        a.classList.add('m-1');
        a.href = data.articles[i].url;
        a.innerText = data.articles[i].title;
        div.appendChild(a);

        var p = document.createElement("a");
        a.classList.add('m-1');

        var p = document.createElement("p");
        p.innerText = ' (' + formatDate(data.articles[i].publishedAt) +
            ' - ' + data.articles[i].source.name + ')';
        div.appendChild(p);

        mainContainer.appendChild(div);
    }
}