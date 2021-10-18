<template>
  <div>
    <!-- Inicio Hero -->

    <div class="container py-5">
      <div
        class="
          row
          flex-lg-row-reverse
          align-items-center
          d-sm-flex
          justify-content-sm-center
          g-5
          py-5
        "
      >
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="../assets/img/covers/Contact.png"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 d-sm-flex justify-content-sm-center">
          <h1 class="display-5 fw-bold lh-1 mb-3">Contáctanos</h1>
        </div>
      </div>
      <hr class="featurette-divider" />
    </div>

    <!-- Final Hero -->

    <!-- Productos -->

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Datos de Contacto</h1>
        </div>
      </div>
      <hr class="featurette-divider mb-5" />
    </div>

    <!-- Inicio Datos de Contacto -->

    <div class="container">
      <div class="row border border-primary rounded">
        <div class="col">
          <ul class="list-group">
            <li
              class="list-group-item d-flex gap-3 py-3 border-0"
              aria-current="true"
            >
              <img
                src="../assets/img/Direccion.png"
                alt="twbs"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 class="mb-0">Dirección</h6>
                  <p class="mb-0 opacity-75">Bogotá: Cr. 18 No. 79 A – 42</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col">
          <ul class="list-group">
            <li
              class="list-group-item d-flex gap-3 py-3 border-0"
              aria-current="true"
            >
              <img
                src="../assets/img/Telefono.png"
                alt="twbs"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 class="mb-0">Teléfonos</h6>
                  <p class="mb-0 opacity-75">Línea de Bogotá: 57(1) 5802606</p>
                  <p class="mb-0 opacity-75">Barranquilla: 57(5) 3225103</p>
                  <p class="mb-0 opacity-75">Cali: 57(2) 3989476</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col">
          <ul class="list-group">
            <li
              class="list-group-item d-flex gap-3 py-3 border-0"
              aria-current="true"
            >
              <img
                src="../assets/img/Correo.png"
                alt="twbs"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 class="mb-0">Correo</h6>
                  <p class="mb-0 opacity-75">info@g3virtualstore.com</p>
                  <p class="mb-0 opacity-75">comercial@g3virtualstore.com</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Final Datos de Contacto -->

      <!-- Inicio Formulario de Contacto -->

      <div class="row mt-5">
        <div class="col border rounded py-3 px-3">
          <form>
            <legend>
              Diligencie el siguiente formulario para solicitar más información
              acerca de nuestros productos y servicios
            </legend>

            <div class="row g-3 mb-3">
              <div class="col">
                <label for="name" class="form-label">Nombres</label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="col">
                <label for="surname" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="surname" />
              </div>
              <div class="col">
                <label for="mail" class="form-label">Correo</label>
                <input type="email" class="form-control" id="mail" />
              </div>
            </div>

            <div class="row g-3 mb-3">
              <div class="col">
                <label for="inputAddress2" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="inputAddress2" />
              </div>
              <div class="col">
                <label for="tel" class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="tel" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12">
                <p>Sobre que producto desea recibir mas información</p>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >Gestión de Transporte</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >Gestión de Peajes</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >Software Factory</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox4"
                    value="option4"
                  />
                  <label class="form-check-label" for="inlineCheckbox4"
                    >Todos</label
                  >
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    En cumplimiento de la Constitución Política Nacional, Ley
                    1581 de 2012 y el decreto 1377 de 2013, es responsable del
                    tratamiento de sus datos personales. ¿Autoriza a G3 Virtual
                    Store al manejo de sus datos personales?
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Final Formulario de Contacto -->
    </div>
    <hr />
  </div>
</template>
