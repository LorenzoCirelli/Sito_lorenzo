<style lang="scss" scoped>
@use "../../assets/styling/variables/spacing" as spacing;
@use "../../assets/styling/variables/radius" as radius;
@use "../../assets/styling/variables/colors" as color;

.container {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: spacing.$padding;

  &__card {
    text-align: center;
    background-color: color.$white;
    display: flex;
    flex-direction: column;
    gap: spacing.$padding;
    padding: spacing.$padding * 6 spacing.$padding;
    border-radius: radius.$border_radius;
    border: 1px solid color.$primary;
    cursor: pointer;
    flex: 1 1 calc(33.33% - #{spacing.$padding * 2});
  }

  &__card:hover {
    background-color: color.$cta;
    color: color.$white;
    transform: scale(1.1);

    strong {
      color: color.$white;
    }
  }
}
</style>
<template>
  <div class="container">
    <a href="/it/justme/company" class="container__card" @click="setRole(Role.COMPANY)">
      <IconSelector icon="work" /><strong>Sono un azienda</strong>
    </a>
    <a href="/it/justme/company" class="container__card" @click="setRole(Role.DEVELOPER)">
      <IconSelector icon="code" /><strong>Sono un programmatore</strong>
    </a>
    <a href="/it/justme/company" class="container__card" @click="setRole(Role.FRIEND)">
      <IconSelector icon="person" /><strong>Sono un amico</strong>
    </a>
    <a href="/it/justme/company" class="container__card" @click="setRole(Role.OTHER)">
      <IconSelector icon="question_mark" /><strong>Altro</strong>
    </a>
  </div>

</template>

<script lang="ts" setup>
import { Role } from '../../composable/role/role.enum';
import IconSelector from '../icons/IconSelector.vue';
const setRole = (role: Role) => {
  localStorage.setItem('role', role)
}
</script>
