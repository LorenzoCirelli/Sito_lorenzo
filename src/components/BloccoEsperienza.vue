<style lang="scss" scoped>
$border_radius: 25px;
.testo {
  background-color: white;
  border:2px blue solid;
  border-radius: $border_radius;
  width: 98%;
  margin: auto;
  display: flex;
  &__logo {
    flex: 1;
    padding: clamp(10px, 2.5svh, 150px);
    display: flex;
  }
  &__descrizione {
    flex: 2;
    padding: clamp(10px, 2.5svh, 150px);
  }
}
.titolo {
  font-size: clamp(20px, 1.7vw, 400px);
  padding-bottom: 10px;
}
.img {
  position: relative;
  width: 90%;
  height: auto;
  object-fit: cover;
}
.desc {
  font-size: clamp(10px, 1vw, 300px);
}
</style>
<template>
  <div class="testo">
    <div class="testo__logo">
      <img src="/net4market.svg" alt="Net4market" class="img" />
    </div>
    <div class="testo__descrizione">
      <p class="titolo">{{ $t('n4m_description[0]') }}</p>
      <p class="desc">{{ $t('n4m_description[1]') }}</p>
    </div>
  </div>
</template>
