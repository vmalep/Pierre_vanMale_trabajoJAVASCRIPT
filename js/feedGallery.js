/*
This file contains the js code to fetch and populate the gallery cards.
*/

fetch('../data/gallery.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendCards(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


// ToDo: https://gosnippets.com/snippets/bootstrap-5-cards-gallery
function appendCards(data) {
    var mainContainer = document.getElementById("myGalleryCards");

    for (var i = 0; i < (data.cards.length); i++) {

        var div_col = document.createElement("div");
        div_col.classList.add('col-md', 'm-2'); // -lg-4', 'd-none', 'd-lg-block

        var div_card = document.createElement("div");
        div_card.classList.add('card');

        var img_card = document.createElement("img");
        img_card.classList.add('card-img-top');
        img_card.src = data.cards[i].image;
        img_card.alt = data.cards[i].title;

        var div_card_body = document.createElement("div");
        div_card_body.classList.add('card-body');

        var h5_title = document.createElement("h5");
        h5_title.classList.add('card-title');
        h5_title.innerText = data.cards[i].title;

        var p_descr = document.createElement("p");
        p_descr.classList.add('card-text');
        p_descr.innerText = data.cards[i].description;

        div_card_body.appendChild(h5_title);
        div_card_body.appendChild(p_descr);

        div_card.appendChild(img_card);
        div_card.appendChild(div_card_body);

        div_col.appendChild(div_card);

        mainContainer.appendChild(div_col);

    }
}