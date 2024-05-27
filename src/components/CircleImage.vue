<style lang="scss">
.card{
    background: radial-gradient($primary, $background);
    width: auto;
    padding:40px;
    border-radius: 50%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.center{
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
}
img{
    border-radius: 50%;
}
.skeleton {
    min-width: 150px;
    min-height: 150px;
}
@media (max-width: 800px) {
    img {
        width: 100%;
        height: auto;
    }
    .card{
        padding:20px;
    }
}
</style>
<template>
    <div class="skeleton" v-if="Person.isLoading">
        <Skeletor />
    </div>
    <div class="center" v-else>
        <div class="card">
            <div class="card__profile"><img src="../assets/miao.png" alt="Io"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
import { usePersonStore } from "@/stores/Person";
const Person = usePersonStore();
</script>
