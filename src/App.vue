<style scoped>
.law {
  width: 97%;
  position:fixed;
  top:0%;
  background-color: rgb(190, 44, 44);
  padding:1.5%
}
</style>
<template>
  <div :class="isDark ? 'dark' : 'light'">
    <home></home>
    <Work></Work>
    <Vita></Vita>
    <Contatti></Contatti>

    <CookiePrivacy class="law"></CookiePrivacy>
  </div>
</template>

<script setup lang="ts">
import home from '@/view/HomePage.vue'
import Work from './view/WorkPage.vue'
import Vita from './view/VitaPersonale.vue'
import Contatti from './view/ContattiLorenzo.vue'
import { useDark } from '@vueuse/core'
import CookiePrivacy from './view/cookiePrivacy.vue'
const isDark = useDark()

</script>
