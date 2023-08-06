<template>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

  <section>
    <home :dati="pagina1_data" v-if="isLoaded"></home>
  </section>

    <progetti :Proj="projects" v-if="isProjLoaded"></progetti>



</template>

<script>

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/aos/dist/aos.css';
import AOS from '../node_modules/aos/dist/aos.js';
import {Persona,Progetti,Istruzione,Esperienza} from './Classi.js';

import home from './view/Pag1.vue';
import progetti from './view/Progetti.vue';
export default {
  name: 'App',
  components: {
     home,
     progetti
  },
  data(){
    return{
          isLoaded:false, // true solo se dati avvio risultano caricati
          pagina1_data: {},
          projects:[],
          isProjLoaded:false,
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
   
    //verifica array anagrafica pieno
    if(owner != undefined){
          //segnala dati caricati
          this.isLoaded = true;
    }
    this.pagina1_data = owner;

     //recupero progetti
     let res = await fetch('https://api.github.com/users/LorenzoCirelli/repos');
        let data = await res.json();
        var i = 0;
        await data.forEach(element => {
          this.projects[i]= new Progetti(element.name,element.language,element.description,element.svn_url);
          i++;
        });

      if(this.projects != null){
              this.isProjLoaded=true;
      }

    },

   

    
  }


}
</script>
<style>
*{
        margin:0px;
}
section{
        height: 100vh;
}
</style>


