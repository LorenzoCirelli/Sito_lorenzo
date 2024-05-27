<style scoped lang="scss">
.aligner {
    text-align: left;
    font-size: 150%;
}
.bgg {
    background-color: $primary;
    color: white;
    padding:2px;
}
.skeleton {
    min-width: 200px;
}
</style>
<template>
    <Skeletor v-if="Persona.isLoading"/>
    <div class="aligner" v-else>
        <h1>Premi & formazione</h1>
        <p><span class="bgg">Diplomato con 100</span> in amministrazione finanza e marketing specializzazione in sistemi informativi aziendali.</p>
    </div>
</template>
<script setup lang="ts">
import { usePersonStore } from '@/stores/Person'
import { reactive } from 'vue';
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
const Persona = reactive(usePersonStore());
</script>