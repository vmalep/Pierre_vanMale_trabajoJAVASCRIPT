class Presupuesto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h3 class="text-center">Formulario de solicitud</h3>
    <form method="" id="presupuestoForm" onsubmit="submitForm('presupuestoForm')">
        <div class="form-group">
    
            <div class="row">
                <div class="col">
                    <div class="card m-2 p-2">
                        <h5 class="card-title">Datos de contacto</h5>
                        <div>
                            <div class="form-outline mb-3" style="width: 100%; max-width: 22rem">
                                <label class="form-label" for="phone">Nombre</label>
                                <input type="text" aria-label="First name" class="form-control" name="firstName"
                                    placeholder="Nombre" required="true">
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="form-outline mb-3" style="width: 100%; max-width: 22rem">
                                <label class="form-label" for="phone">Apellido</label>
                                <input type="text" aria-label="Last name" class="form-control" name="lastName"
                                    placeholder="Apellido" required="true">
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="form-outline mb-3" style="width: 100%; max-width: 22rem">
                                <label class="form-label" for="phone">Phone number with country code</label>
                                <input type="text" id="phone" class="form-control" data-mdb-input-mask="+48 999-999-999" /
                                    name="phoneNumber" placeholder="+34 123 456 789" required="true">
                            </div>
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="inputEmail1" name="correoEmail"
                                placeholder="login@domain.com" required="true">
                        </div>
                    </div>
                </div>
    
                <div class="col">
                    <div class="card m-2 p-2">
                        <h5 class="card-title">Presupuesto</h5>
                        <label>Tipo de producto</label>
                        <select class="form-select mb-2" onchange="calculatePresupuesto()" id="productType"
                            name="productType" required="true">
                            <option value="">Selecciona un producto</option>
                            <option value="tikiWiki">TikiWiki (€500)</option>
                            <option value="wordPress">WordPress (€750)</option>
                            <option value="customsite">Custom (€1'000)</option>
                        </select>
    
                        <div class="d-flex border rounded flex-column p-2 mb-2">
                            <div class="d-flex justify-content-between">
                                <p>Plazo</p>
                                <p>(Precio multi 8/num de semanas)</p>
                            </div>
                            <form class="text-center">
                                <div class="form-group">
                                    <label class="sr-only" for="form-range-1-04">Numero de semanas</label><br>
                                    <input class="form-range" type="range" min="1" max="8" step="1" value="8" id="nbWeeks"
                                        name="nbWeeks" oninput="calculatePresupuesto()">
                                    <ul class="list-inline d-flex justify-content-between">
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">1</p>
                                        </li>
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">2</p>
                                        </li>
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">3</p>
                                        </li>
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">4</p>
                                        </li>
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">5</p>
                                        </li>
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">6</p>
                                        </li>
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">7</p>
                                        </li>
                                        <li>
                                            <p class="m-0">|</p>
                                            <p class="m-0">8</p>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
    
                        <!-- <div class="container mb-2 border rounded p-2">
                        <div class="form-group">
                            <label for="formControlRange">Plazo (en semanas)</label><br>
                            <input type="range" class="form-control-range" min="1" max="8" step="1" id="nbWeeks"
                            name="nbWeeks"
                            onInput="$('#rangeval').html($(this).val()); calculatePresupuesto()">
                            <span id="rangeval">8</span>
                        </div>
                    </div>
                    
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossorigin="anonymous">
                    </script> -->
    
                        <div class="card p-2" style="width: 18rem;">
                            <h6>Extras</h6>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchDedicatedServer"
                                    name="switchDedicatedServer" onchange="calculatePresupuesto()">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Dedicated
                                    server (100€)</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchDomainName"
                                    name="switchDomainName" onchange="calculatePresupuesto()">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Domain name
                                    (50€)</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchAutoBkp"
                                    name="switchAutoBkp" onchange="calculatePresupuesto()">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Automatic
                                    backup (75€)</label>
                            </div>
                        </div>
                        <p class="mt-2">Presupuesto actualizado:</p>
                        <div class="p-3 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3"
                            id="presupuestoTotal"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card m-2 p-2" style="width: 18rem;">
                        <h5 class="card-title">Accepto Condictiones et envio de presupuesto</h5>
                        <div class="border rounded">
                            <label class="form-check-label" for="defaultCheck1">
                                He leido la policia de privacidad
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" required="true">
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">Submit</button>
                        <button type="button" class="btn btn-warning mt-2"
                            onclick="resetForm('presupuestoForm')">Resetear</button>
                    </div>
                </div>
            </div>
    </form>
    `;
  }
}

customElements.define('presupuesto-component', Presupuesto);