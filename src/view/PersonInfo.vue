<template>
  <PageDivision :elems="attr"></PageDivision>
</template>
<script lang="ts" setup>
import PageDivision from '@/layouts/PageDivision.vue'
import CatPlayer from '@/components/CatPlayer.vue';
import LIstPlayer from '@/components/LIstPlayer.vue';
const attr: Array<object> = [CatPlayer, LIstPlayer]
</script>