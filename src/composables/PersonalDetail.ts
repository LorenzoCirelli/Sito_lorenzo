import { createAlova} from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import { usePersonStore } from '@/stores/Person'
//libreria per calclolo date
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

//instance of alova for connection to github api
const baseGithubUrl = import.meta.env.VITE_GITHUB_BASE_URL
const alova = createAlova({
  baseURL: baseGithubUrl,
  requestAdapter: GlobalFetch()
})



function compilaDati() {
    const Persona = usePersonStore();
    const githubUsername = import.meta.env.VITE_GITHUB_USER
    Persona.isLoading = true;
    alova
      .Get(githubUsername, {
        localCache: {
          mode: 'placeholder',
          expire: 500000
        }
      })
      .then((response) => response.json())
      .then((data) => {
        Persona.job = data.company;
        Persona.name = data.name
        Persona.location = data.location
        Persona.isLoading = false
        console.log(data)
      })
      return true;
}

function dateFrom(from:any) {
  const workStart = dayjs(from)
  return (dayjs().from(workStart, true))
}

const func = {dateFrom, compilaDati}

export default func;