class Galeria extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>Galerìa</h1>
      <!-- Carousel wrapper -->
      <div class="carousel-inner py-4">
          <!-- Single item -->
          <div class="carousel-item active">
              <div class="container">
                  <!-- <div class="row"> -->
                  <div id="myGalleryCards" class="row"></div>
                  <!-- </div> -->
              </div>
          </div>
      </div>

    `;
  }
}

customElements.define('galeria-component', Galeria);