class Galeria extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h3 class="text-center">Galerìa</h3>

    <div id="myGalleryCards"></div>

    `;
  }
}

customElements.define('galeria-component', Galeria);