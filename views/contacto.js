class Contacto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="col border rounded m-2 p-2 bg-secondary bg-gradient">
      <h5>Direccion de la empresa</h5>
      <p>Plaça del Doctor Letamendi, 13, L'Eixample, 08007 Barcelona</p>
      <p>Tel. de contacto: 932 91 11 00</p>
    </div>
    `;
  }
}

customElements.define('contacto-component', Contacto);