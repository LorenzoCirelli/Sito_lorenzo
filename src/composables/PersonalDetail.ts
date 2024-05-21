import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import { usePersonStore } from '@/stores/Person'

function compilaDati() {
    const baseGithubUrl = import.meta.env.VITE_GITHUB_BASE_URL
    const githubUsername = import.meta.env.VITE_GITHUB_USER
    const Url = baseGithubUrl.concat(githubUsername);
    const Persona = usePersonStore();
    console.log(Url);
    const alovaInstance = createAlova({
        requestAdapter: GlobalFetch()
    })
    alovaInstance
      .Get(Url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
    
    Persona.work = "test";
    console.log(Persona);
}

export default compilaDati