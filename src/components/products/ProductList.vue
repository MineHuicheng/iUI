<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <template v-for="product in products">
          <!-- 动态属性使用相应的缩写，静态属性依然使用'=' -->
        <div :key="product._id" class="product">
          <p class="product__name">产品名称：{{product.name}}</p>
          <p class="product__description">介绍：{{product.description}}</p>
          <p class="product__price">价格：{{product.price}}</p>
          <p class="product.manufacturer">生产厂商：{{product.manufacturer}}</p>
          <img :src="product.image" alt="" class="product__image">
          <button @click="addToCart(product)">加入购物车</button>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
export default class ProductList extends Vue {
    name: string = 'product-list';
    get products() {
            return this.$store.state.products;
        };
    // 通过 this.$store.commit将携带当前商品的对象作为载荷提交到action类型为ADD_TO_CART的mutation中，在 mutation 中进行本地状态修改
    addToCart(product: any): void {
        this.$store.commit('ADD_TO_CART', {
            product
        });
    }
}
</script>