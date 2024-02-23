class Contacto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container">
      <h3 class="text-center">Contacto</h3>

      <div class="col border rounded m-2">
        <div id="map" class="map"></div>
      </div>
    
      <div class="col border rounded m-2 p-2">
        <h5>Direccion de la empresa</h5>
        <p>Plaça del Doctor Letamendi, 13, L'Eixample, 08007 Barcelona</p>
        <p>Tel. de contacto: 932 91 11 00</p>
      </div>
    </div>
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
    <script src="leaflet-routing-machine/leaflet-routing-machine.js"></script>
    <script src="../js/loadMap.js" type="text/javascript"></script>

    `;
  }
}

customElements.define('contacto-component', Contacto);