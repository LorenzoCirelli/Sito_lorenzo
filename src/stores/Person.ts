import { defineStore } from 'pinia'
import { ref } from 'vue';
export const usePersonStore = defineStore('Person', ()=> {
  const job = ref("Default");
  const name = ref("Default");
  const location = ref("Default");
  const isLoading = true;
  return {job, name, location, isLoading}
})
