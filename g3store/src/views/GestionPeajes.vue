<template>
  <div>
    <!-- Hero -->

    <div class="container py-5">
      <div
        class="row flex-lg-row-reverse align-items-center d-sm-flex justify-content-sm-center g-5 py-5"
      >
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="../assets/img/covers/GestionPeajes.png"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 d-sm-flex justify-content-sm-center">
          <h1 class="display-5 fw-bold lh-1 mb-3">Gestión de Peajes</h1>
        </div>
      </div>
      <hr class="featurette-divider" />
    </div>

    <!-- Productos -->

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Software para gestión de peajes</h1>
          <p>
            Aplicación web para el control de peso vehicular en las estaciones
            de pesaje del territorio nacional ajustados a la normatividad
            vigente.
          </p>
        </div>
      </div>
      <hr class="featurette-divider mb-5" />
    </div>

    <div class="container">
      <div class="row">

        <!-- Productos-->

        <div 
        v-for="product in products" 
        :key="product.id" 
        class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
        <Product :product="product" />
          <!-- <div class="card_container">
            <div class="card_image">
              <img 
              :src="API_URL + product.Image.url" alt="{{product.Name}}" />
            </div>
            <div class="card_title">
              {{product.Name}}
            </div>
            <div class="card_text">
              <p>{{ product.Description }}</p>
            </div>
            <div class="card_footer">
              <div class="card_price">{{ product.Price }}</div>
              <div>
                <button @click="addProductToCart" class="btn btn-primary btn-sm">Agregar</button>
              </div>
            </div>
          </div> -->
        </div>

      </div>
    </div>

    <hr />
  </div>
</template>

<script>

import { ref, onMounted } from 'vue';
import { getProductByCatetory } from '../api/products';
import Product from '@/components/Product.vue';
import { API_URL } from '../utils/constants';

export default {
 components: {
    Product,
  },
    setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProductByCatetory('1');
      products.value = response;
    });
    return {
      products,
      API_URL
    };
  },

}
</script>
