<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url('/wave.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  &__testo,
  &__immagine {
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 1;
  }
}
.immagine {
  border-radius: 38px;
  transform: rotate(-5deg);
  width: clamp(300px, 30vw, 1400px);
  animation: 1s img_load;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.nominativo {
  font-size: clamp(40px, 4.6vw, 500px);
  font-weight: 800;
  animation: 1s text_written;
}
@keyframes text_written {
  0% {
    overflow: hidden;
    width: 0%;
    text-wrap: nowrap;
  }
  100% {
    width: 100%;
    text-wrap: nowrap;
  }
}
.qualifica {
  font-size: clamp(30px, 2vw, 400px);
  font-weight: 500;
}
.dati {
  font-size: clamp(20px, 1.1vw, 300px);
  font-weight: 300;
  padding-top: 1vh;
}

@keyframes img_load {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
@media only screen and (max-width: 790px) {
  .container {
    flex-direction: column-reverse;
    height: 90svh;
    padding-top: 20svh;
  }
}
.allineamento_testo {
  text-align: left;
}



</style>
<template>
    <div class="container">
      <div class="container__testo">
        <div class="allineamento_testo">
          <div class="nominativo"><span class="colore">Lorenzo</span> Cirelli,</div>
          <div class="qualifica">software developer</div>
          <div class="dati">{{ tempo }} • Cremona</div>
        </div>
      </div>
      <div class="container__immagine">
          <img :src="url_img" alt="Lorenzo seduto su una sedia" class="immagine" v-if="loaded"/>
          <div class="loader" v-else>

          </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
let loaded = ref(false);
import dayjs from 'dayjs'
import { useUrlToBlob } from '@/composable/blob';
import { ref } from 'vue';
let url_img = ref('');
loadImg();

async function loadImg() {
  try {
    url_img.value = await useUrlToBlob('/lorenzo700.jpg');
    loaded.value = true;
  } catch (error) {
    console.error('Error fetching image URL');
  }
}
const tempo = dayjs('2004-08-03').fromNow(true)
</script>
