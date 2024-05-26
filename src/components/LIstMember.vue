<style lang="scss">
.listElement {
    list-style-type: none;
  text-align: left;
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
