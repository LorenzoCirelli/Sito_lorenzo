<style scoped>
div {
    transform: scale(0.9);
}
button {
    padding:2vh;
    border: transparent;
    border-radius: 10px;
    cursor: pointer;
}
button:hover {
    background-color: black;
    color: wheat;
}
</style>
<template>
    <div v-if="mostra">
        <h1>{{ $t('legal[0]') }}</h1>
        <p>{{ $t('legal[1]') }}</p>
        <a href="privacyutente.pdf" target="_blank"> terms and conditions </a>"
        <br>
        <button @click="nascondi">{{ $t('legal[2]') }}</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let cookies = document.cookie
let mostra = cookies.search("policyAccept") ? ref(true) : ref(false);

function nascondi() {
    mostra.value = false;
    document.cookie = "policyAccept=true";
}
</script>