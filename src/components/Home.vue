<template>
  <div>
    <div class="title">
      <h1>In Stock</h1>
    </div>
    <ProductList />
  </div>
</template>

<script lang="ts"> //scrpit中需要指明lang=ts，否则编辑器将不能识别语言类型而报错
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductList from '@/components/products/ProductList.vue';

@Component({
  components: {
    ProductList
  }
})
export default class Home extends Vue {
  @Prop()
  name: string = 'home';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
