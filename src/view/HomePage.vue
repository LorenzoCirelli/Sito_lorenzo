<template>
  <PageDivision :elems="attr"></PageDivision>
</template>
<script lang="ts" setup>
import PolaroidCard from '@/components/CircleImage.vue'
import PageDivision from '@/layouts/PageDivision.vue'
import welcomeText from '@/components/welcomeText.vue'
const attr: Array<object> = [welcomeText, PolaroidCard]
</script>
