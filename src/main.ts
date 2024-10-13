import './assets/style.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import 'dayjs/locale/it'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import it from '@/assets/it.json'
import en from '@/assets/en.json'
const locale = navigator.language
dayjs.locale(locale)
dayjs.extend(relativeTime)
const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: locale,
  messages: {
    en: en,
    it: it
  }
})

app.use(i18n)

app.mount('#app')