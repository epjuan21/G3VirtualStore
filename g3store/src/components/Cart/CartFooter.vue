<template>
<div class="cart_footer">
  <span>Total:</span>
  <span>{{ total }}</span>
</div>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core';
export default {
  name: 'CartFooter',
  props: {
    products: Array,
  },

  setup(props) {
    let total = ref(0);

    watchEffect(() => {
      props.products;
      let totalTemp = 0;
      // if (!props.producs) return
      props.products.forEach((product) => {
        totalTemp += product.Price * product.quantity;
      });
      total.value = totalTemp.toFixed(2);
    });
    return {
      total,
    };
  },
};
</script>

<style lang="scss" scoped>

.cart_footer {
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #F1F4F7;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
}
.cart_footer span {
  font-weight: bold;
  font-size: 1.5rem;
}

.cart_footer span:first-child  {
  color: #565555;
}

.cart_footer span:last-child {
  color: #dc3545;
}

.cart_footer span:last-child:before {
  content: '$ ';
}

</style>
