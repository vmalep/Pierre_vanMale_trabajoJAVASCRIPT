class Galeria extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>Galerìa</h1>
    `;
  }
}

customElements.define('galeria-component', Galeria);