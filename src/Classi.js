  export class Persona{
    constructor (nome, cognome, nascita, lavoro){
      this.nome = nome;
      this.cognome = cognome;
      this.data = nascita;
      this.lavoro = lavoro;

    }
  };

  export class Progetti{
    constructor (nome, lang, desc, link){
      this.nome = nome;
      this.linguaggio = lang;
      this.descrizione = desc;
      this.link = link;
    }
  };

  export class Istruzione{
    constructor (scuola, titolo, voto, specifica){
      this.scuola =  scuola;
      this.titolo = titolo;
      this.voto = voto;
      this.specifica = specifica;
    }
  };



