<template>
  <HomePage></HomePage>
</template>
<script lang="ts" setup>
import HomePage from '@view/HomePage.vue';
import compilaDati from '@/composables/PersonalDetail';
compilaDati();
</script>