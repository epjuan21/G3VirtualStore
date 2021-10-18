<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            <i class="fas fa-cart-plus"></i>
            Resumen Carrito de Compras
          </h1>
        </div>
      </div>
      <hr class="featurette-divider mb-5" />
    </div>
    <div class="container">
      <table class="table" v-if="products">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row">{{ product.Name }}</th>
            <td>{{ product.quantity }}</td>
            <td>{{ product.Price }}</td>
            <td>
              <button class="btn btn-danger">
                <i
                  class="fas fa-trash"
                  @click="deleteAllProductCart(product.id)"
                ></i>
              </button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Total:</td>
            <td colspan="2">$ {{ getTotal() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core';
import { getProductsCartApi, deleteAllProductCartApi } from '@/api/cart';
export default {
  name: 'Cart',
  setup() {
    let products = ref(null);
    let reloadCart = ref(false);

    watchEffect(async () => {
      reloadCart.value;
      const response = await getProductsCartApi();
      products.value = response;
    });

    const getTotal = () => {
      let totalTemp = 0;
      if (!products.value) return
      products.value.forEach((product) => {
        totalTemp += product.Price * product.quantity;
      });
      return totalTemp.toFixed(2);
    };

    const deleteAllProductCart = (idProduct) => {
      deleteAllProductCartApi(idProduct);
      reloadCart.value = !reloadCart.value;
    };

    return {
      products,
      getTotal,
      deleteAllProductCart,
    };
  },
};
</script>
