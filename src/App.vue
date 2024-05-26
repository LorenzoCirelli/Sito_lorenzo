<template>
  <HomePage></HomePage>
  <PersonInfo></PersonInfo>
</template>
<script lang="ts" setup>
import PersonInfo from './view/PersonInfo.vue'
import HomePage from './view/HomePage.vue';
import compilaDati from '@/composables/PersonalDetail';
compilaDati();
</script>