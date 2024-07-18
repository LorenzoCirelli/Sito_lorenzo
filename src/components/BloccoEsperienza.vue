<style lang="scss" scoped>
.container {
  padding: clamp(10px, 1.3vh, 500px) clamp(20px, 1.3vw, 600px);
  max-width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  &__lottie {
    flex: 1;
  }
  &__description {
    flex: 1;
    &__lavoro {
      width: 50%;
      text-align: left;
      img {
        width: 40%;
        max-width: 50vw;
      }
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
  .descrizione {
    font-size: clamp(12px, 4svw, 15px);
  }
  .titolo {
    font-size: clamp(15px, 3svw, 50px);
    font-weight: 600;
    padding-bottom: 5px;
  }
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
      <DotLottieVue autoplay loop src="/lorean.lottie" class="container__lottie__macchina" />
    </div>
    <div class="container__description">
      <div class="container__description__lavoro">
        <img src="/net4market.png" alt="Logo net4market" />
        <p class="titolo">{{ $t('n4m_description[0]') }}</p>
        <p class="descrizione">{{ $t('n4m_description[1]') }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>
