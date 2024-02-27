/*
This file contains the js code to fetch and populate the gallery cards.
*/

// Does not work on GitHub Deployment (https://vmalep.github.io/Pierre_vanMale_trabajoJAVASCRIPT), not sure why...
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

function shuffleFisherYates(array) {
    let i = array.length;
    while (i--) {
        const ri = Math.floor(Math.random() * i);
        [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
}

function appendCards(data) {
    var mainContainer = document.getElementById("myGalleryCards");

    cards = shuffleFisherYates(data.cards);

    for (var i = 0; i < (cards.length); i++) {
        
        var a_card = document.createElement("a");
        a_card.href = cards[i].image;
        a_card.setAttribute('data-lightbox', 'gallery');
        a_card.setAttribute('data-title', cards[i].description);
        a_card.classList.add('m-1');
                
        var img_card = document.createElement("img");
        img_card.src = cards[i].thumb;
        img_card.alt = cards[i].title;

        a_card.appendChild(img_card);

        mainContainer.appendChild(a_card);
    }
}
