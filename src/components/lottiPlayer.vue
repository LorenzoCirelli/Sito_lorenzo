<template>
  <Skeletor height="40%" v-if="Person.isLoading"/>
  <DotLottieVue autoplay loop :src="path" v-else class="lottie"/>
</template>
<script setup lang="ts">
import "vue-skeletor/dist/vue-skeletor.css";
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { Skeletor } from "vue-skeletor";
import { usePersonStore } from "@/stores/Person";
const Person = usePersonStore();
defineProps({
    path: String,
})
</script>
<style lang="scss">
@media (max-width: $mobile) {
  .lottie {
    width: 145%;
  }
}
</style>