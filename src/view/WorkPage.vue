<style scoped lang="scss">
.container_testo {
  min-width: 150px;
  max-width: 100%;
  min-height: 50px;
  font-size: clamp(25px, 2.3vw, 300px);
  font-weight: 700;
  display: flex;
  padding: clamp(10px, 2vh, 50px) clamp(10px, 2vw, 50px);
  justify-content: center;
  &__testo {
    width: fit-content;
    text-align: center;
  }
}
.icone::after {
  position: relative;
  top: -16svh;
  right: -18svh;
  content: '\ead3';
  font-size: clamp(20px, 3vw, 300px);
  animation: braces 10s infinite;
  filter: invert(0.3);
}
.icone::before {
  position: relative;
  top: -5svh;
  right: -16svh;
  content: '\ea24';
  font-size: clamp(20px, 3vw, 300px);
  animation: lampadina 5s infinite;
  filter: invert(0.3);
}

@keyframes lampadina {
  0% {
    text-shadow: 2px 2px 10px rgb(255, 255, 0);
    top: -16svh;
    right: -18svw;
  }
  25% {
    text-shadow: 2px 2px 10px rgb(231, 167, 6);
    text-shadow: 2px 2px 10px transparent;
    top: -10svh;
    right: -25svw;
  }
  50% {
    text-shadow: 2px 2px 10px rgb(118, 142, 38);
    top: -10svh;
    right: -35svw;
  }
  75% {
    text-shadow: 2px 2px 10px transparent;
    top: -10svh;
    right: -30svw;
  }
  100% {
    text-shadow: 2px 2px 10px rgb(255, 255, 0);
    top: -16svh;
    right: -18svw;
  }
}

@keyframes braces {
  0% {
    text-shadow: 2px 2px 10px rgb(31, 163, 207);
    top: -16svh;
    right: 18svw;
  }
  25% {
    text-shadow: 2px 2px 10px rgb(15, 144, 190);
    text-shadow: 2px 2px 10px transparent;
    top: -10svh;
    right: 15svw;
  }
  50% {
    text-shadow: 2px 2px 10px rgb(18, 199, 222);
    top: -20svh;
    right: 35svw;
  }
  75% {
    text-shadow: 2px 2px 10px transparent;
    top: -20svh;
    right: 30svw;
  }
  100% {
    text-shadow: 2px 2px 10px rgb(31, 163, 207);
    top: -15svh;
    right: 18svw;
  }
}
.experience {
  max-width: 100%;
  min-height: 50px;
  padding: clamp(20px, 3vh, 400px) clamp(30px, 5vw, 500px);
  &__bg {
    background-color: white;
  min-width: 100%;
}
}
</style>
<template>
  <div class="container_testo">
    <div class="container_testo__testo">
      {{ $t('title_work[0]') }} <span class="font_medium">{{ $t('title_work[1]') }}</span> {{ $t('title_work[2]') }}
      <div><span class="font_medium">{{ $t('title_work[3]') }}</span> <span class="colore">{{ $t('title_work[4]') }}</span></div>
      <span class="material-symbols-outlined icone"></span>
    </div>
  </div>

  <div class="experience">
    <div class="experience__bg">
      <div class="experience__bg__testo"></div>
    </div>
  </div>
</template>
