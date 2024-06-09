import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { smartcraftLight } from '@/themes';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        // defaultTheme: 'smartcraftLight',
        themes: {
            smartcraftLight,
        },
      },
  })
  app.vueApp.use(vuetify)
})