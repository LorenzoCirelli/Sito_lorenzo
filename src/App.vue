<script setup lang="ts">
import home from '@/view/HomePage.vue'
import Work from './view/WorkPage.vue';
import Vita from './view/VitaPersonale.vue';
import Contatti from './view/ContattiLorenzo.vue';
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<template>
  <div :class="isDark ? 'dark': 'light'">
    <home></home>
    <Work></Work>
    <Vita></Vita>
    <Contatti></Contatti>
  </div>
</template>
