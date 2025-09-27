<style lang="scss" scoped>
@use '../../assets/styling/designComponents/icon.scss';

</style>
<template>
<span class="material-symbols-outlined">
{{ icon }}
</span>
</template>
<script lang="ts" setup>

defineProps({
    icon: {
        type: String,
        required: true
    }
})
</script>