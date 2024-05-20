<template>
    <div class="container">
        <component class="container__elem"
        v-for="i, key in elems" :key="key" :is="i">
        </component>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    elems: Array<object>,
})
console.log(typeof(props.elems));
</script>
<style lang="scss" scoped>
.container {
    background-color: $background;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &__elem{
       flex:1;
    }
}
</style>