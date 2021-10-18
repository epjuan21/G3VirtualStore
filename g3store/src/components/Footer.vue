<template>
  <div class="container">

        <footer class="row pt-5 my-t">
          <div class="
          col
          col-lg-4
          col-md-12
          col-sm-12
          ">
            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img src="../assets/img/Logo.png" width="256" alt="">
            </a>
          </div>
      
          <div class="col col-lg-4 col-md-6 col-sm-12 mb-sm-3 mb-md-0">
            <h5>Navegación</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/">Inicio</router-link></li>
              <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/team">Quiénes somos</router-link></li>
              <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/contact">Concacto</router-link></li>

            </ul>
          </div>

          <div class="col col-lg-4 col-md-6 col-sm-12 mb-sm-3 mb-md-0">
            <h5>Productos y Servicios</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/gestion-peajes">Gestión de Peajes</router-link></li>
              <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/gestion-transporte">Gestión de Transporte</router-link></li>
              <li class="nav-item mb-2"><router-link class="nav-link p-0 text-muted" to="/software-factory">Software Factory</router-link></li>
            </ul>
          </div>

          <div class="row d-flex justify-content-between py-4 my-4 border-top">
            <p class="my-0 col-sm-12 col-md-6">© 2021 G3 Virtual Store - Desarrollo de Software | Todos los derechos reservados.</p>
            <ul class="list-unstyled d-flex my-0 col-sm-12 col-md-6 justify-content-center justify-content-md-end">
              <li class="ms-3"><a class="link-dark" href="#"><img src="../assets/img/social/twitter.png" alt="" width="24" height="24"></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><img src="../assets/img/social/facebook.png" alt="" width="24" height="24"></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><img src="../assets/img/social/instagram.png" alt="" width="24" height="24"></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><img src="../assets/img/social/youtube.png" alt="" width="24" height="24"></a></li>
            </ul>
          </div>

        </footer>

    </div>

</template>