<template>
  <div :class="isDark ? 'dark' : 'light'">
    <span>
      <home></home>
      <Work></Work>
      <Vita></Vita>
      <Contatti></Contatti>
    </span>

    <cookiePrivacy 
      v-if="!hasChosen"
      class="law"
      @privacy="handleConsent"
    />
  </div>
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import { defineAsyncComponent, ref } from 'vue'
import cookiePrivacy from './view/cookiePrivacy.vue'

const isDark = useDark()
const hasChosen = ref(false)

const home = defineAsyncComponent(() => import('@/view/HomePage.vue'))
const Work = defineAsyncComponent(() => import('@/view/WorkPage.vue'))
const Vita = defineAsyncComponent(() => import('@/view/VitaPersonale.vue'))
const Contatti = defineAsyncComponent(() => import('@/view/ContattiLorenzo.vue'))

const handleConsent = (accepted: boolean) => {
  hasChosen.value = true
  document.cookie = `policyAccept=${accepted}; path=/; max-age=${60 * 60 * 24 * 365}`

  if (accepted) {
    ;(window as any).clarity('consentv2', {
      ad_storage: "granted",
      analytics_storage: "granted"
    })
  } else {
    ;(window as any).clarity('consentv2', {
      ad_storage: "denied",
      analytics_storage: "denied"
    })
    ;(window as any).clarity('consent', false)
  }
}

// Inizializza Clarity solo se l'utente ha già fatto una scelta in precedenza
const cookies = document.cookie
if (cookies.includes('policyAccept=true')) {
  hasChosen.value = true
  ;(window as any).clarity('consentv2', {
    ad_storage: "granted",
    analytics_storage: "granted" 
  })
} else if (cookies.includes('policyAccept=false')) {
  hasChosen.value = true
  ;(window as any).clarity('consentv2', {
    ad_storage: "denied",
    analytics_storage: "denied"
  })
  ;(window as any).clarity('consent', false)
}
</script>

<style scoped>
.law {
  width: 97%;
  position: fixed;
  top: 0%;
  background-color: rgb(190, 44, 44);
  padding: 1.5%;
}
</style>
