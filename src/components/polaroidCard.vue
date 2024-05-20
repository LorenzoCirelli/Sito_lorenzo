<template>
    <div class="center">
        <div class="card">
            <div class="card__profile"><img src="../assets/miao.png" alt="Io"></div>
            <div class="card__description">
                <p>Il mio Milo,</p>
                <p>3 Dicembre 2023</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.card{
    background-color: $primary;
    width: auto;
    padding:20px;
    &__description{
        font-family: "Comic Neue", cursive;
        font-weight: bolder;
        font-size: 110%;
        font-style: normal;
        text-align: left;
    }
}
.center{
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
}
</style>