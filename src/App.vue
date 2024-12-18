<style scoped>
.law {
  width: 97%;
  position: fixed;
  top: 0%;
  background-color: rgb(190, 44, 44);
  padding: 1.5%;
}

.blurAndBlock :not(.law, .law > *) {
  filter: blur(30px);
}
</style>

<template>
  <div :class="isDark ? 'dark' : 'light'">
    <span>
      <home></home>
      <Work></Work>
      <Vita></Vita>
      <Contatti></Contatti>
    </span>

    <cookiePrivacy
      class="law"
      @privacy="
        (stato: boolean) => {
          if (stato) {
            accettazione()
          }
        }
      "
    ></cookiePrivacy>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import cookiePrivacy from './view/cookiePrivacy.vue'
import { defineAsyncComponent } from 'vue'
const isDark = useDark()
const cookies = document.cookie

if (!cookies.search('policyAccept')) {
  accettazione()
}

function accettazione() {
  ;(window as any).clarity('consent')
}

const home = defineAsyncComponent(() => import('@/view/HomePage.vue'))
const Work = defineAsyncComponent(() => import('@/view/WorkPage.vue'))
const Vita = defineAsyncComponent(() => import('@/view/VitaPersonale.vue'))
const Contatti = defineAsyncComponent(() => import('@/view/ContattiLorenzo.vue'))
</script>
