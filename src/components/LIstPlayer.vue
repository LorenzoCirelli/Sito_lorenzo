<template>
    <div class="listOfElement">
        <Skeletor v-for="i in 5" :key="i" v-if="Persona.isLoading" width="50%"/>
        <ListMember v-for="element, key in list" v-bind:elemntOfLIst="element" v-bind:key="key" v-else></ListMember>
    </div>
</template>
<script setup lang="ts">
import type { Member } from './../types/ListMember';
import ListMember from './LIstMember.vue';
import func from '../composables/PersonalDetail'
import { usePersonStore } from '@/stores/Person'
import { computed, reactive} from 'vue';
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
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