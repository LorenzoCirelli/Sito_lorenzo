<style lang="scss">
</style>
<template>
  <HomePage></HomePage>
  <PersonInfo></PersonInfo>
</template>
<script lang="ts" setup>
import PersonInfo from './view/PersonInfo.vue'
import '@dotlottie/player-component';
import HomePage from '@view/HomePage.vue';
import compilaDati from '@/composables/PersonalDetail';
const playMode = ref('bounce');
compilaDati();
</script>