<template>
  <div>
    <div v-for="product in products" :key="product.id" class="cart_container">
      <div class="cart_image">
        <img :src="API_URL + product.Image.url" alt="{{product.Name}}" />
      </div>
      <div class="cart_text">
        <span class="cart_title">{{ product.Name }}</span>
        <span class="cart_price">{{ product.Price }}</span>
      </div>
      <div class="cart_buttons">
        <span>{{ product.quantity }}</span>
        <div class="cart_buttons_container">
          <button @click="increaseProductCart(product.id)">
            <i class="fas fa-plus"></i>
          </button>
          <button @click="decreaseProductCart(product.id)">
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_URL } from '@/utils/constants';
import { addProductToCartApi, deleteProductCartApi } from '@/api/cart';
export default {
  name: 'CartItem',
  props: {
    products: Array,
    reloadCartFn: Function,
  },

  setup(props) {
    const increaseProductCart = (id) => {
      addProductToCartApi(id);
      props.reloadCartFn();
    };

    const decreaseProductCart = (id) => {
      deleteProductCartApi(id);
      props.reloadCartFn();
    };

    return {
      API_URL,
      increaseProductCart,
      decreaseProductCart
    };
  },
};
</script>

<style lang="scss" scoped>
.cart_container {
  display: flex;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  margin-bottom: 1rem;
}

.cart_container:last-child {
  margin-bottom: 0;
}

.cart_image {
  margin-right: 1rem;
}

.cart_image img {
  width: 84px;
}

.cart_text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  max-width: 350px;
}

.cart_title {
  font-weight: bold;
  font-size: 1rem;
  color: #1196f5;
  margin-bottom: 1rem;
}

.cart_price {
  color: #807c7c;
  font-weight: bold;
}

.cart_price:before {
  content: '$ ';
}

.cart_buttons {
  display: flex;
  flex-direction: column;
  //   flex-grow: 4;
  justify-content: space-between;
  align-items: center;
}

.cart_buttons > span {
  font-size: 2rem;
  font-weight: 700;
  color: #565555;
}

.cart_buttons_container button {
  background-color: white;
  border: none;
  padding: 3px 8px;
  border-radius: 2px;
}

.cart_buttons_container button i {
  color: #565555;
  transition: color 0.5s ease;
}

.cart_buttons_container button:hover,
.cart_buttons_container button:hover i {
  color: white;
  background-color: #1196f5;
}
</style>
