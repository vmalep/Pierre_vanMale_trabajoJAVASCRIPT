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
            <div id="myRSS"></div>
        </div>
        <div class="col-md border rounded m-2">
            Acerca de mi
        </div>

    </div>
    </div>
    `;
  }
}

customElements.define('home-component', Home);