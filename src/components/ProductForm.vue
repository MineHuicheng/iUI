<template>
    <form @submit.prevent="saveProduct">
        <!-- '.'是vue的修饰符的特殊后缀指出一个指令应该以特殊方式绑定 -->
        <!-- '@'是vue的指令v-on的缩写 -->
<!-- 其他表单，如 input 等 -->
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    v-model="model.name"
                    name="name"
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label>Price</label>
                <input
                    type="number"
                    class="form-control"
                    placeholder="Price"
                    v-model="model.price"
                    name="price" 
                />
            </div>
            <div class="form-group">
                <label>Manufacturer</label>
                <select
                    type="text"
                    class="form-control"
                    v-model="model.manufacturer"
                    name="manufacturer">
                    <template v-for="manufacturer in manufacturers">
                        <option 
                            :key='manufacturer._id' 
                            :value="manufacturer._id" 
                            :selected="manufacturer._id === (model.manufacturer && model.manufacturer._id)"
                        >
                            {{manufacturer.name}}
                        </option>
                    </template>
                </select>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="form-group">
            <label>Image</label>
            <input
                type="text"
                class="form-control"
                placeholder="Image"
                v-model="model.image"
                name="image"
            />
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea
                class="form-control"
                placeholder="Description"
                rows="5"
                v-model="model.description"
                name="description"
            ></textarea>
      </div>
    <div class="form-group new-button">
        <button class="button">Add Product</button>
        <!-- button的默认属性是submit，它和form表单联结就会触发submit事件，从而并不会经过自定义事件的触发 -->
    </div>
    </form>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ProductForm extends Vue {
  @Prop()
  manufacturers: string;

  isSaved: boolean = false;

  saveProduct(): void {
    this.isSaved = true;

    // 完成一些保存创建商品的逻辑 ...
  }

}
</script>