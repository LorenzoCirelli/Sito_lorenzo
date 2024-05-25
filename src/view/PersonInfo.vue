<template>
  <PageDivision :elems="attr"></PageDivision>
</template>
<script lang="ts" setup>
import CircleImage from '@/components/CircleImage.vue'
import PageDivision from '@/layouts/PageDivision.vue'
import welcomeText from '@/components/welcomeText.vue'
import LottiPlayer from '@/components/lottiPlayer.vue';
const attr: Array<object> = [LottiPlayer, welcomeText]
</script>
