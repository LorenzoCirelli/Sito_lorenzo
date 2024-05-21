<template>
    <div class="block">
        <div class="ragruppa">
            <p>Lorenzo Cirelli</p>
            <p class="evidenziato">Software Dev</p>
        </div>
    </div>
</template>
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