<template>
  <div class="card">
    <h2 class="text-black p-5">I miei progetti:</h2>
    <br>
    <div class="navbar navbar-expand-lg bg-light bg2 ">
            <p v-for="p,index in Proj" class="progetto_single"><button type="button" @click.prevent="leggi=index" class="btn btn-outline-primary">{{ p.nome }}</button></p>
  </div>
    <div class="card-body text-center">
      <br>
      <h5 class="card-title">{{ Proj[leggi].nome }}</h5>
      <p class="card-text">{{ Proj[leggi].descrizione }}</p>
      <p class="card-text">{{ Proj[leggi].Linguaggio }}</p>
      <a :href="Proj[leggi].link" class="btn btn-primary">Vedi su github <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg></a>
      <br><br>
    </div>
    <div class="card-footer text-muted text-center">
      - Lorenzo Cirelli
    </div>
    <br>
  </div>
  
  </template>
    <script>
    
      export default{
        props:['Proj'],
        created(){
          console.log(this.Proj[1]);
        },
        data(){
          return {
            leggi:0,
          };
        },
    }
    
    </script>
    <style>
    .unsetter{
        all:unset;
        color:white;
    }
    .bg2{
        display: flex;
      flex-wrap: wrap;
      text-align: center;
    }
    .progetto_single{
        width: 20%;
      /* Adjust the width as per your requirement */
      padding:3px;
      box-sizing: border-box;
      overflow: hidden; /* Prevents text overflow */
      white-space: nowrap; /* Ensures text stays in a single line */
      text-overflow: ellipsis; /* Truncates text with an ellipsis */
    }
    a{
        text-decoration: none;
        color:#000000;
    }
    @media only screen and (max-width: 600px) {
      .progetto_single{
        width: 100%;
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    </style>