import './assets/style.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import 'dayjs/locale/it'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
const locale = navigator.language
dayjs.locale(locale)
dayjs.extend(relativeTime)
const app = createApp(App)
const i18n = createI18n({
  locale: locale,
  messages: {
    en: {
      title_work: ['Projecting', 'and', 'developing', 'the ', 'future'],
      n4m_description: [
        'Software developer',
        'I develop and mantain software for managing medical track, meals, recording of clinical cases and much more for hospital'
      ]
    },
    it: {
      title_work: ['Progettando', 'e', 'sviluppando', 'il ', 'futuro'],
      n4m_description: [
        'Software developer',
        'Sviluppo e mantengo software per la gestione di tracciati, pasti, registrazione casi clinici e molto altro per ospedali.'
      ]
    }
  }
})

app.use(i18n)

app.mount('#app')