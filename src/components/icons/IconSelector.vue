<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss">
@use '../../assets/styling/designComponents/icon.scss';
</style>
<template>
    <span class="material-symbols-outlined">
        {{ icon }}
    </span>
</template>
