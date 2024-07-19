<style lang="scss" scoped>
button {
    padding:clamp(16px, 2.5svh, 50px) clamp(25px, 5svw, 50px);
    border: 1.5px black solid;
    background-color: white;
    border-radius:20px;
    margin: clamp(15px, 2vh, 90px);
    font-size: clamp(15px, 1.5vw, 50px);
}
button:hover {
    background-color: rgb(0, 0, 0);
    color: white;
    cursor: pointer;
}
a {
    width: fit-content ;
    margin:auto;
}
</style>
<template>
    <a v-if="isInsta" href="https://www.instagram.com/devlorenzocirelli/">
        <button >{{ $t('social[0]') }}</button>
    </a>
    <a v-else href="https://www.linkedin.com/in/devlorenzocirelli">
        <button >{{ $t('social[1]') }}</button>
    </a>
</template>
<script lang="ts" setup>
const props = defineProps({
    testo: String,
})
const isInsta = props.testo == "instagram" ? true : false;
</script>