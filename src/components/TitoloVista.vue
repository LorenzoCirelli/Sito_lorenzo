<style lang="scss" scoped>
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
</style>
<template>
  <div class="container_testo">
    <div class="container_testo__testo">
      <slot></slot>
    </div>
  </div>
</template>
