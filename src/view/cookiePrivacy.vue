<style scoped>
div {
  transform: scale(0.9);
}
button {
  padding: 2vh;
  margin: 10px 10px 0px 0px;
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
    <br />
    <button @click="accetta(true)">{{ $t('legal[2]') }}</button>
    <button @click="accetta(false)">{{ $t('legal[3]') }}</button>
  </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from 'vue'
const cookies = document.cookie
let mostra = cookies.search('policyAccept') ? ref(true) : ref(false)

const emit = defineEmits(['privacy'])

function accetta(stato: boolean) {
  mostra.value = false
  emit('privacy', stato)
  if (stato) {
    document.cookie = 'policyAccept=true'
  }
}
</script>
