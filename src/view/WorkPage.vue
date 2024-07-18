<style scoped lang="scss">
.container_testo {
  min-width: 150px;
  max-width: 100%;
  min-height: 50px;
  font-size: clamp(25px, 2.3vw, 300px);
  font-weight: 700;
  display: flex;
  padding: clamp(10px, 2svh, 20px) clamp(10px, 2svw, 50px);
  justify-content: center;
  &__testo {
    width: fit-content;
    text-align: center;
  }
}

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
</style>
<template>
  <div class="container_testo">
    <div class="container_testo__testo">
      {{ $t('title_work[0]') }} <span class="font_medium">{{ $t('title_work[1]') }}</span>
      {{ $t('title_work[2]') }}
      <div>
        <span class="font_medium">{{ $t('title_work[3]') }}</span>
        <span class="colore">{{ $t('title_work[4]') }}</span>
      </div>
      <span class="material-symbols-outlined icone"></span>
    </div>
  </div>
  <div class="pd_tb">
    <BloccoEsperienza></BloccoEsperienza>
  </div>
</template>
<script lang="ts" setup>
import BloccoEsperienza from '@/components/BloccoEsperienza.vue'
</script>
