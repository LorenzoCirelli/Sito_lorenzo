<template>
  <Skeletor height="40%" v-if="Person.isLoading"/>
  <DotLottieVue autoplay loop :src="path" v-else/>
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