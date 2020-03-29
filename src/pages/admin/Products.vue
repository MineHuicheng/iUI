<template>
  <div>
    <div class="title">
      <h1>This is Admin</h1>
    </div>
    <div class="body">
      vue所对应的所以函数不需要书写（）来获得返回值
      {{ product.name }} 
    </div>
  </div>
</template>

<script lang='ts'>

import {Vue, Prop, Component} from 'vue-property-decorator';

export default class Products extends Vue {
   get product (): any { // 函数前添加关键字get，表明该函数为vue的计算属性computed
        return  this.$store.state.products[0]; //Vue 实例提供的一些有用的实例属性与方法，它们都有前缀 $，以便与用户定义的属性区分开来
    } 
}
</script>>