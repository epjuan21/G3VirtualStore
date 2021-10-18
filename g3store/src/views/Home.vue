<template>
  <div>
    <!-- Hero -->
    <div class="cover_container cover_img">
      <div class="container">
        <div class="cover_title">G3 Virtual Store</div>
        <div class="cover_subtitle">Software de Calidad</div>
      </div>
    </div>

    <!-- Productos -->

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Conoce nuestros productos y servicios</h1>
        </div>
      </div>
    </div>

    <div class="container mb-3">
      <div class="row">

        <div v-for="category in categories" :key="category.id" class="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
          <div class="card_container">
            <div class="card_image">
              <img
                :src="API_URL + category.image[0].url"
                alt="Gestión de Transporte"
              />
            </div>
            <div class="card_title">{{category.name}}</div>
            <div class="card_text">
              <p>{{category.description}}</p>
            </div>
            <div class="card_button">
              <router-link
                class="btn btn-outline-primary"
                :to="category.slug"
              >
                Mas información
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <!-- Formulario de Contacto -->

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Solicite más información</h1>
        </div>
      </div>
    </div>

    <form action="" class="d-flex">
      <div class="container mb-3">
        <div class="row mb-3">
          <div class="col">
            <input type="text" placeholder="Nombres" class="form-control" />
          </div>
          <div class="col">
            <input type="text" placeholder="Apellidos" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <input type="email" placeholder="E-Mail" class="form-control" />
          </div>
          <div class="col">
            <input type="tel" placeholder="Teléfono" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <textarea
              class="form-control"
              placeholder="Mensaje"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >En cumplimiento de la Constitución Política Nacional, Ley 1581 de
            2012 y el decreto 1377 de 2013, es responsable del tratamiento de
            sus datos personales. ¿Autoriza a G3 Virtual Store al manejo de sus
            datos personales?</label
          >
        </div>
        <div class="row">
          <div class="col">
            <input type="submit" class="btn btn-primary" />
          </div>
        </div>
      </div>
    </form>

    <hr />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCategoriesApi } from '../api/category';
import { API_URL } from '../utils/constants';

export default {
  setup() {
    let categories = ref(null);

    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });
    return {
      categories,
      API_URL
    };
  },
};
</script>
<style lang="scss" scoped>

.card_container {
  height: 350px;
}

</style>