<style lang="scss" scoped>
.gatto {
    width:40%;
    margin:auto;
}
@media only screen and (max-width: 790px) {
  .gatto {
    width: 80%;
  }
}
.pt {
  padding-top: clamp(10px, 2.2svh, 30px);
}
.btn_box {
  margin: auto;
  width:50%;
  display: grid;
}
</style>
<template>
  <div class="pt">
      <TitoloVista>
        <span class="font_medium">{{ $t('title_contact[0]') }}</span>
        {{ $t('title_contact[1]') }}
        {{ $t('title_contact[2]') }}
        {{ $t('title_contact[3]') }}
        <div>
          <span class="font_medium">{{ $t('title_contact[4]') }} </span>
          <span class="colore"> {{ $t('title_contact[5]') }} </span>
          <span class="font_medium"> {{ $t('title_contact[6]') }} </span>
          <span class="colore"> {{ $t('title_contact[7]') }} </span>
          {{ $t('title_contact[8]') }}
        </div>
        <span class="material-symbols-outlined icone"></span>
      </TitoloVista>
      <DotLottieVue autoplay loop src="/gatto.lottie" class="gatto"/>
      <div class="btn_box">
        <LorenzoBtn testo="instagram"></LorenzoBtn>
        <LorenzoBtn testo="linkedin"></LorenzoBtn>
      </div>
  </div>
</template>
<script lang="ts" setup>
import TitoloVista from '@/components/TitoloVista.vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import LorenzoBtn from '@/components/LorenzoBtn.vue'
</script>
