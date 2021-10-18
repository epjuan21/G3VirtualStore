<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              <i class="fas fa-shopping-cart"></i>
              Carrito de Compras
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <CartItem :products="products" :reloadCartFn="reloadCartFn" />
              <CartFooter :products="products" v-if="products" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <router-link to="/cart">
              <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn btn-primary">Comprar</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import CartItem from '@/components/Cart/CartItem.vue';
import CartFooter from '@/components/Cart/CartFooter.vue';
import { getProductsCartApi } from '@/api/cart';
export default {
  name: 'Cart',
  components: {
    CartItem,
    CartFooter,
  },

  setup() {
    let products = ref(null);
    let reloadCart = ref(false);

    const getProductsCart = async () => {
      const response = await getProductsCartApi();
      products.value = response;
    };

    watchEffect(() => {
      reloadCart.value;
      getProductsCart();
    });

    const reloadCartFn = () => {
      reloadCart.value = !reloadCart.value;
    };

    return {
      products,
      reloadCartFn,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-dialog {
  max-width: 600px;
}

.modal-title {
  color: #565555;
}

.modal-footer button {
  color: white;
}
</style>