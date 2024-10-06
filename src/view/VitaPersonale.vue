<style scoped lang="scss">
.titolo {
  font-size: clamp(20px, 2.5svw, 40px);
  font-weight: 600;
  padding-bottom: 5px;
}
img {
  width: 40%;
  max-width: 50vw;
}
.pt {
  padding-top: clamp(10px, 2svh, 30px);
  min-height: 100svh;
}
.descrizione {
  font-size: clamp(15px, 1.3vw, 300px);
}
</style>
<template>
  <div class="pt">
    <TitoloVista>
      <span class="colore">{{ $t('title_life[0]') }}</span>
      <span class="font_medium">{{ $t('title_life[1]') }}</span>
      {{ $t('title_life[2]') }}
    </TitoloVista>
    <div class="pd_tb">
      <BloccoFlex lottie="/bici.lottie" flex="row-reverse">
        <p class="titolo">{{ $t('subtitle_life') }}</p>
        <p class="descrizione">{{ $t('description_life') }}</p>
      </BloccoFlex>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TitoloVista from '@/components/TitoloVista.vue'
import BloccoFlex from '@/components/BloccoFlex.vue'
</script>
