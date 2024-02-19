class Home extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container">
    <h3 class="text-center">Inicío</h3>
    <div class="row">
        <div class="col-md border rounded m-2">
            Acerca de WebMadeEasy
        </div>
        <div class="col-md border rounded m-2">
            Servicios ofrecidos
        </div>
        <div class="col-md border rounded m-2">
            Noticias
            <div id="myData"></div>
        </div>
        <div class="col-md border rounded m-2">
            Acerca de mi
        </div>
        <script>
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

            fetch('data/news.json')
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
        </script>

    </div>
</div>
    `;
  }
}

customElements.define('home-component', Home);