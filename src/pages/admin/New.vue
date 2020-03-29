<template>
    <ProductForm 
      @save-product="addProduct"
      :model="model"
      :manufacturers="manufacturers"
    />
      <!-- ':'是v-bind 的简洁语法，用来让元素节点的特性和 Vue 实例的属性保持一致 -->
</template>
<script lang='ts'>
import ProductForm from '@/components/ProductForm.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    ProductForm
  }
})
// @Component修饰器中的components参数声明了当前组件引入的外部组件，而其本身声明自定义类是一个Vue组件
export default class New extends Vue {
      model: object = {};
      manufacturers: Array<any> =  [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
      ];
      addProduct(model: object): void {
        console.log('model', model);
      };

}
</script>>