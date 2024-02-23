class Galeria extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h3 class="text-center">Galerìa</h3>

    <div class="py-4">
        <div class="container">
          <div id="myGalleryCards" class="row"></div>
        </div>
    </div>
    `;
  }
}

customElements.define('galeria-component', Galeria);