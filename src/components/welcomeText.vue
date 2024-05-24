<style lang="scss" scoped>
.block{
    display: flex;
    text-align: center;
    justify-content: center;
}
.ragruppa p{
    flex:1;
}
p{
    font-size: xx-large;
    font-weight: bolder;
}
.evidenziato{
    background-color: $primary;
    padding:20px;
    color:$background;
    box-shadow: rgba($primary, 0.2) 0px 7px 29px 0px;
}
</style>

<template>
    <div class="block">
        <div class="ragruppa">
            <p>{{ Persona.name }}</p>
            <p class="evidenziato">Software Dev</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePersonStore } from '@/stores/Person'
const Persona = usePersonStore();
</script>