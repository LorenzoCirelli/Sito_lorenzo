<style lang="scss" scoped>
.listElement {
  text-align: left;
  min-width:150px;
  width: fit-content;
  padding: 10% 0px 10% 0px;
}

span {
  font-weight: 400;
  text-transform: capitalize;
  font-size: xx-large
}

.title {
  font-size: x-large;
  font-weight: bolder;
}

@media (max-width: $mobile) {
  span{
    font-size: xx-large;
  }
}

@media (max-width: $zoom) {
  span{
    font-size: medium;
  }
}

</style>
<template>
  <div class="listElement">
    <div v-if="Persona.isLoading">
      <Skeletor v-for="i in 2" :key="i" width="50%"/>
    </div>
    <div v-else>
      <div class="title">{{ elemntOfLIst?.title }}</div>
      <span>{{ elemntOfLIst?.description }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Member } from '@/types/ListMember'
import type { PropType } from 'vue'
import { usePersonStore } from '@/stores/Person'
import { reactive } from 'vue';
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
const Persona = reactive(usePersonStore());
defineProps({
  elemntOfLIst: Object as PropType<Member>
})
</script>
