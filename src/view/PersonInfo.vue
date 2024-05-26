<template>
  <PageDivision :elems="attr"></PageDivision>
</template>
<script lang="ts" setup>
import PageDivision from '@/layouts/PageDivision.vue'
import welcomeText from '@/components/welcomeText.vue'
import CatPlayer from '@/components/CatPlayer.vue';
const attr: Array<object> = [welcomeText, CatPlayer]
</script>
