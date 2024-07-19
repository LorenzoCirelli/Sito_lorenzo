<style scoped lang="scss">
.descrizione {
  font-size: clamp(12px, 1.3svw, 20px);
}
.titolo {
  font-size: clamp(15px, 2.3svw, 40px);
  font-weight: 600;
  padding-bottom: 5px;
}
img {
  width: 40%;
  max-width: 50vw;
}
</style>
<template>
  <TitoloVista>
   <span class="colore">{{ $t('title_life[0]') }}</span>
    <span class="font_medium">{{ $t('title_life[1]') }}</span>
    {{ $t('title_life[2]') }}
  </TitoloVista>
  <div class="pd_tb">
    <BloccoFlex lottie="/bici.lottie" flex="row-reverse">
      <p class="titolo">La mia vita</p>
      <p class="descrizione">{{ $t('description_life') }}</p>
    </BloccoFlex>
  </div>
</template>
<script lang="ts" setup>
import TitoloVista from '@/components/TitoloVista.vue'
import BloccoFlex from '@/components/BloccoFlex.vue'
</script>
