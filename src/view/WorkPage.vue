<style scoped lang="scss">
.icone::after {
  position: relative;
  right: -17svw;
  content: '\ea24';
  font-size: clamp(20px, 3vw, 300px);
  animation: lampadina 5s infinite;
  filter: invert(0.3);
  top: -14svh;
}

@keyframes lampadina {
  0% {
    text-shadow: 2px 2px 10px rgb(255, 255, 0);
    top: -15vh;
  }
  50% {
    text-shadow: 2px 2px 10px transparent;
    top: -14vh;
  }
  100% {
    text-shadow: 2px 2px 10px rgb(255, 255, 0);
    top: -15vh;
  }
}
.pd_tb {
  padding: 10px 0;
}

@media only screen and (max-width: 790px) {
  .icone::after {
    right: -23svw;
  }
  @keyframes lampadina {
    0% {
      text-shadow: 2px 2px 10px rgb(255, 255, 0);
      top: -9svh;
    }
    50% {
      text-shadow: 2px 2px 10px transparent;
      top: -10svh;
    }
    100% {
      text-shadow: 2px 2px 10px rgb(255, 255, 0);
      top: -9svh;
    }
  }
}

.titolo {
  font-size: clamp(20px, 2.5svw, 50px);
  font-weight: 600;
  padding-bottom: 5px;
}
img {
  width: 40%;
  max-width: 50vw;
}
.fullPage{
  min-height:100svh;
}
.descrizione {
  font-size: clamp(15px, 1.3vw, 300px);
}
</style>
<template>
  <div class="fullPage">
    <TitoloVista>
      {{ $t('title_work[0]') }} <span class="font_medium">{{ $t('title_work[1]') }}</span>
      {{ $t('title_work[2]') }}
      <div>
        <span class="font_medium">{{ $t('title_work[3]') }}</span>
        <span class="colore">{{ $t('title_work[4]') }}</span>
      </div>
      <span class="material-symbols-outlined icone"></span>
    </TitoloVista>
    <div class="pd_tb">
      <BloccoFlex lottie="/lorean.lottie" flex="row">
        <img :src="url_img" alt="Logo net4market" v-if="loader" />
        <div class="loader" v-else></div>
        <p class="titolo">{{ $t('n4m_description[0]') }}</p>
        <p class="descrizione">{{ $t('n4m_description[1]') }}</p>
      </BloccoFlex>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TitoloVista from '@/components/TitoloVista.vue'
import BloccoFlex from '@/components/BloccoFlex.vue'

import { ref } from 'vue'
import { useUrlToBlob } from '@/composable/blob'
let loader = ref(false);
let url_img = ref('');
loadImg();

async function loadImg() {
  try {
    url_img.value = await useUrlToBlob('net4market.png');
    loader.value = true;
  } catch (error) {
    console.error('Error fetching image URL')
  }
}
</script>
