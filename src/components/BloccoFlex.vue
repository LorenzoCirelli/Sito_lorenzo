<style lang="scss" scoped>
.container {
  padding: clamp(10px, 1.3vh, 500px) clamp(20px, 1.3vw, 600px);
  max-width: 100%;
  display: flex;
  flex-direction: v-bind('flex ');
  text-align: center;
  justify-content: center;
  align-items: center;
  &__lottie {
    flex: 1;
  }
  &__description {
    flex: 1;
    text-align: center;
    justify-content: center;
    display: flex;
    &__lavoro {
      width: 50%;
      text-align: left;
    }
  }
}
.titolo {
  font-size: clamp(14px, 2svw, 50px);
  font-weight: 600;
  padding-bottom: 5px;
}
.descrizione {
  font-size: clamp(10px, 1.1vw, 25px);
}
@media only screen and (max-width: 790px) {

  .container {
    flex-direction: column;
    &__lottie {
      padding-bottom: clamp(20px, 26svh, 50px);
    }
    &__description {
      &__lavoro {
        width: 90%;
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="container__lottie">
      <DotLottieVue autoplay loop :src="lottie" class="container__lottie__macchina" />
    </div>
    <div class="container__description">
      <div class="container__description__lavoro">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
defineProps({
  lottie: String,
  flex: String
})
</script>
