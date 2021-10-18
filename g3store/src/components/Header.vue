<template>
  <header class="header">
    <div class="bg-primary">
      <div class="container">
        <!-- Login & Register -->

        <nav v-if="!token" class="navbar justify-content-end mx-2 py-3">
          <div class="d-flex">
            <router-link class="btn btn-sm btn-primary" to="/login">
              Iniciar Sesión
            </router-link>
            <router-link
              class="btn btn-sm btn-outline-light ms-2"
              to="/register"
            >
              Registrarse
            </router-link>
            <button
              class="btn btn-sm btn-outline-light mx-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </nav>

        <!-- Logout -->

        <nav v-if="token" class="navbar justify-content-end">
          <div class="d-flex">
            <button
              class="btn btn-sm btn-outline-light mx-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i class="fas fa-shopping-cart"></i>
            </button>
            <button @click="logout" class="btn btn-outline-light mx-2">
              <i class="fa fa-sign-out-alt"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>

    <!-- Navbar -->

    <div class="container">
      <nav class="navbar">
        <a class="navbar-brand text-white" href="/">
          <img
            src="@/assets/img/Logo.png"
            alt="Vue Logo"
            height="100"
            class="d-inline-block align-text-top mx-2"
          />
        </a>

        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/team">
              Quienes somos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              Contacto
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <Cart />
  </header>
</template>

<script>
import { getTokenApi, deleteTokenApi } from '../api/token';
import Cart from '@/components/Cart/Cart.vue';

export default {
  components: {
    Cart,
  },

  setup() {
    const token = getTokenApi();
    const logout = () => {
      deleteTokenApi();
      location.replace('/');
    };

    return {
      token,
      logout,
    };
  },
};
</script>
