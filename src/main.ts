import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import pl from './locales/pl.json'
import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import uk from './locales/uk.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { pl, en, de, es, uk },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
