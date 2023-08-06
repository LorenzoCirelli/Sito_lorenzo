<template>
<div v-if="isLoaded">

</div>
</template>

<script>

import '../node_modules/aos/dist/aos.css';
import AOS from '../node_modules/aos/dist/aos.js';

import {Persona,Progetti,Istruzione,Esperienza} from './Classi.js';
export default {
  name: 'App',
  components: {
     
  },
  data(){
    return{
          isLoaded:false, // true solo se dati avvio risultano caricati
    }

  },
  mounted(){
    AOS.init();
  },
  created(){
    //funzione avvio
    this.DataRetrive();
  },
  methods:{
    //calcola età
    eta(data){
      
    var dob = new Date(data);

    var month_diff = Date.now() - dob.getTime();

    var age_d = new Date(month_diff);

    var year = age_d.getUTCFullYear();

  var age = Math.abs(year - 1970);
  return age;

    },

    //raccoglie i dati che servono all'avvio
    async DataRetrive(){
      //pollulamento cls persona
      const anagrafica_raw = await fetch('dati.json');
      const anagrafica = await anagrafica_raw.json();
      const github_raw = await fetch('https://api.github.com/users/LorenzoCirelli');
      const github = await github_raw.json();
      let lavoro = github.company;
      if(lavoro == null){
        lavoro = "Inoccupato";
      }
    const owner = new Persona(anagrafica.Anagrafica.nome,anagrafica.Anagrafica.Cognome,this.eta(anagrafica.Anagrafica.compleanno),lavoro);
    console.log(owner);

    //verifica array pieno
    if(owner != undefined){
          this.isLoaded = true;
    }

    },
  }
}
</script>


