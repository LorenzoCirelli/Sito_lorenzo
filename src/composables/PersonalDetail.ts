import { createAlova} from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import { usePersonStore } from '@/stores/Person'

//instance of alova for connection to github api
const baseGithubUrl = import.meta.env.VITE_GITHUB_BASE_URL
const alova = createAlova({
  baseURL: baseGithubUrl,
  requestAdapter: GlobalFetch()
})


function compilaDati() {
    const Persona = usePersonStore();
    const githubUsername = import.meta.env.VITE_GITHUB_USER
    alova
    .Get(githubUsername)
    .then((response) => response.json())
    .then(data => {
      Persona.work = data.company;
      Persona.name = data.name
      console.log(data);
    })
}

export default compilaDati