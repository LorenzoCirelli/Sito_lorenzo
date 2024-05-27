<style lang="scss" scoped>
.listOfElement {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.listOfElement div{
    flex:1;
}

</style>
<template>
    <div class="listOfElement">

        <div>
            <ListMember v-for="element, key in list" v-bind:elemntOfLIst="element" v-bind:key="key" ></ListMember>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import type { Member } from './../types/ListMember';
import ListMember from './LIstMember.vue';
import func from '../composables/PersonalDetail'
import { usePersonStore } from '@/stores/Person'
import { computed, reactive} from 'vue';
const Persona = reactive(usePersonStore());

const experienceYrs = func.dateFrom('2023-08-21');
const ageYrs = func.dateFrom('2004-08-03');
const experience:Member = {
    title: "Experience",
    description:experienceYrs, 
    emoji:{
        isEnable: false,
        emoji:""
    }
}

const age:Member = {
    title: "Age",
    description:ageYrs, 
    emoji:{
        isEnable: false,
        emoji:""
    }
}

const location:Member = reactive({
    title: "Location",
    description:computed(()=> Persona.location), 
    emoji:{
        isEnable: false,
        emoji:""
    }
})

const work:Member = reactive({
    title: "Work",
    description:computed(()=> Persona.job), 
    emoji:{
        isEnable: false,
        emoji:""
    }
})

const list = [experience, age, location, work];

</script>