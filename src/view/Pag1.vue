<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<div class="contenitore">
    <div class="pz">
        <div class="testo">
            <b><span class="material-symbols-outlined">
            patient_list
            </span> Nome:</b>
            <h2>{{ dati.nome }}</h2>
            <br>
            <b><span class="material-symbols-outlined">
            cyclone
            </span> Cognome:</b>
            <h2>{{ dati.cognome }}</h2>
            <br>
            <b><span class="material-symbols-outlined">
            18_up_rating
            </span> Età:</b>
            <h2>{{ dati.data }} anni</h2>
            <br>
            <b><span class="material-symbols-outlined">
            workspace_premium
            </span> Lavoro:</b>
            <h2>{{ dati.lavoro }}</h2>
        </div>
    </div>
    <div class="pz bg1">
        <img src="img/jp.png" alt="Concorso masserini">
    </div>
</div>
</template>
<script>

export default{
    props:['dati'],
    data(){
        return{

        }
    },
}
</script>
<style>
.contenitore{

    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
}
.pz{
    display: flex;
    flex-direction: column;
    flex:1;
    color:white;
    text-align: left;
    justify-content: center;
    align-items: center;
    font-size: 190%;
    
}
.testo{
    all: unset;
    
}
.testo>b{
    color: orangered;
    animation: load 0.1s;
    font-size: 70%;
}
.pz>img{
    height: 100%;
    margin:auto;
    animation: load 2s;
}
.testo>h2{
    animation: load 1.5s;
}
@keyframes load {
    0%{
        opacity: 0%;
    };
    100%{
        opacity: 100%;
    }
}
@media only screen and (max-width: 600px) {
    .pz>img{
    width: 100%;
    height: auto;
    margin:auto;
    animation: load 2s;
}
.contenitore{
    flex-direction: column;
}
.pz{
    font-size: 170%;
    padding-top:10px;
}
}
</style>