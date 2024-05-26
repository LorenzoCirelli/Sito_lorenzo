<template>
  <DotLottieVue autoplay loop :src="path" />
</template>
<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
defineProps({
    path: String,
})
</script>