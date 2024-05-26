<style lang="scss" scoped>
.listElement {
  text-align: left;
  width: fit-content;
}

p {
    font-weight: 400;
    text-transform: capitalize
}
</style>
<template>
  <div class="listElement">
    <h1>{{ elemntOfLIst?.title }}</h1>
    <p>{{ elemntOfLIst?.description }}</p>
  </div>
</template>
<script lang="ts" setup>
import type { Member } from '@/types/ListMember'
import type { PropType } from 'vue'
defineProps({
  elemntOfLIst: Object as PropType<Member>
})
</script>
