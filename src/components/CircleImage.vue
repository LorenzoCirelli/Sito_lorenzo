<template>
    <div class="center">
        <div class="card">
            <div class="card__profile"><img src="../assets/miao.png" alt="Io"></div>
        </div>
    </div>
</template>
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
</style>