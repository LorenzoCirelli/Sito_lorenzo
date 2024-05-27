vh
<template>
  <div class="container">
    <component class="container__elem" v-for="(i, key) in elems" :key="key" :is="i"> </component>
  </div>
</template>
<script setup lang="ts">
defineProps({
  elems: Array<object>
})
</script>
<style lang="scss" scoped>
.container {
  background-color: $background;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &__elem {
    flex: 1;
    transform: scale(0.9);
    margin-left: 50px;
    margin-right: 50px;
  }
}
@media (max-width: $mobile) {
  .container {
    flex-direction: column;
    min-height: 70vh;
    &__elem {
      flex: 1;
      transform: scale(0.7);
    }
  }
}
</style>
