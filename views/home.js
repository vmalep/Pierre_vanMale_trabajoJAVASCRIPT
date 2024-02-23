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
          <h5>Acerca de WebMadeEasy</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>

      <div class="col-md border rounded m-2">
          <h5>Servicios ofrecidos</h5>
          <p>
            WebMadeEasy es el socio ideal para construire un sitio web efectivo y funcional en pocos dias.
          </p>
          <p>
            En la parte Galeria, puede ver diferentes soluciones que podemos implementar, y en la parte presupuesto, obtener un presupuesto en unos clics.
          </p>
      </div>

      <div class="col-md border rounded m-2">
          <h5>Noticias</h5>
          <div id="myRSS"></div>
      </div>

      <div class="col-md border rounded m-2">
        <h5>Acerca de mi</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div>
    `;
  }
}

customElements.define('home-component', Home);