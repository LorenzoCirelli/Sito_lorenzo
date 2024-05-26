<template>
  <HomePage></HomePage>
  <PersonInfo></PersonInfo>
  <FormazionePremi></FormazionePremi>
</template>
<script lang="ts" setup>
import FormazionePremi from './view/FormazionePremi.vue'
import PersonInfo from './view/PersonInfo.vue'
import HomePage from './view/HomePage.vue';
import func from "@/composables/PersonalDetail"
func.compilaDati();
</script>