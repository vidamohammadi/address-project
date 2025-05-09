import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import { fa } from 'vuetify/locale'
import 'leaflet/dist/leaflet.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components,
    directives,
    locale: {
        locale: 'fa',
        messages: { fa },
        rtl: {
            fa: true,
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
})
createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
