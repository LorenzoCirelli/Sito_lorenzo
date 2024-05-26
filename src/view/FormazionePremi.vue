<template>
  <PageDivision :elems="attr"></PageDivision>
</template>
<script lang="ts" setup>
import PageDivision from '@/layouts/PageDivision.vue'
import InstitutionPlayer from '@/components/InstitutionPlayer.vue';
import DescriptionCard from '@/components/DescriptionCard.vue';
const attr: Array<object> = [InstitutionPlayer,DescriptionCard]
</script>