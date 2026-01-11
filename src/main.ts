import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'minimalLight',
    themes: {
      minimalLight: {
        dark: false,
        colors: {
          background: '#fff7ed',
          surface: '#ffffff',
          primary: '#7c3aed',
          secondary: '#06b6d4',
          accent: '#f97316',
          'on-primary': '#ffffff',
          'on-surface': '#0f1724',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
