<style lang="scss" scoped>
@use '../../assets/styling/variables/spacing' as spacing;
@use '../../assets/styling/variables/radius' as radius;
@use '../../assets/styling/variables/colors' as color;

.container {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: spacing.$padding;

    &__card {
        text-align: center;
        background-color: color.$white;
        display: flex;
        flex-direction: column;
        gap: spacing.$padding;
        padding: spacing.$padding * 6 spacing.$padding;
        border-radius: radius.$border_radius;
        border: 1px solid color.$primary;
        cursor: pointer;
        flex: 1 1 calc(33.33% - #{spacing.$padding * 2});
    }

    &__card:hover {
        background-color: color.$cta;
        color: color.$white;
        transform: scale(1.1);
        strong {
            color: color.$white;
        }
    }
}

</style>
<template>
    <div class="container">
        <span class="container__card">
            <IconSelector icon="work" /><strong>Sono un azienda</strong>
        </span>
        <span class="container__card">
            <IconSelector icon="code" /><strong>Sono un programmatore</strong>
        </span>
        <span class="container__card">
            <IconSelector icon="person" /><strong>Sono un amico</strong>
        </span>
        <span class="container__card">
            <IconSelector icon="question_mark" /><strong>Altro</strong>
        </span>
    </div>
</template>
<script lang="ts" setup>
import IconSelector from '../icons/IconSelector.vue';
</script>