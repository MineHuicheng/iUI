<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
  export default class Admin extends Vue {
    private msg = 'Welcome to the Admin Page'
  }
</script>