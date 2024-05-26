<style lang="scss" scoped>
.listOfElement{
    display: list-item;
}  
</style>
<template>
    <div class="listOfElement">
        <ListMember :elemntOfLIst="elementOfList"></ListMember>
        <ListMember :elemntOfLIst="elementOfList"></ListMember>
        <ListMember :elemntOfLIst="elementOfList"></ListMember>
    </div>
</template>
<script setup lang="ts">
import type {Member} from './../types/ListMember';
import ListMember from './LIstMember.vue';

const elementOfList:Member = {
    title: "Experience",
    description:"Ex", 
    emoji:{
        isEnable: false,
        emoji:""
    }
}

</script>