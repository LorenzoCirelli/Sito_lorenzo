import { defineStore } from 'pinia'
import { ref } from 'vue';
export const usePersonStore = defineStore('Person', ()=> {
  const work = ref("Default");
  const name = ref("Default");
  return {work, name}
})
