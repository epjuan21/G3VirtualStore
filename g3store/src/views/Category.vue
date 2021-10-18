<template>
  <div>
    <!-- Hero -->

    <div class="container py-5">
      <div
        class="row flex-lg-row-reverse align-items-center d-sm-flex justify-content-sm-center g-5 py-5"
      >
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="../assets/img/covers/GestionTransporte.png"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 d-sm-flex justify-content-sm-center">
          <h1 class="display-5 fw-bold lh-1 mb-3"></h1>
        </div>
      </div>
      <hr class="featurette-divider" />
    </div>

    <!-- Title -->

    <div class="container">
      <div class="row">
        <div class="col">
          <h1></h1>
          <p>
            Aplicación web para el control de peso vehicular en las estaciones
            de pesaje del territorio nacional ajustados a la normatividad
            vigente.
          </p>
        </div>
      </div>
      <hr class="featurette-divider mb-5" />
    </div>

    <!-- Products -->

    <div class="container">
      <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4"
        >
          <Product :product="product" />

        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Product from '@/components/Product.vue';
import { getProductsCategory } from '../api/products';
import { getCategoryBySlug } from '../api/category';

export default {
  name: 'Category',
  components: {
    Product,
  },
  
  watch: {
      $route(to, from) {
        this.getProducts(to.params.category),
        this.getCategory(to.params.category)
      }
  },

  setup() {
    let products = ref(null);
    let categories = ref(null);
    const { params } = useRoute()

    onMounted( async () => {
        getProducts(params.category),
        getCategory(params.category)
    });

    const getProducts = async (category) => {
        const response = await getProductsCategory(category);
        products.value = response;
    };

    const getCategory = async (category) => {
        const response = await getCategoryBySlug(category);
        categories.value = response;
    };

    return {
        getProducts,
        products,
        categories,
        getCategory
    }
  },
};
</script>