import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'flag-icons/css/flag-icons.min.css'
import { createApp, watch } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import './style.css'

import en from './locales/en'
import vi from './locales/vi'

const i18n = createI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'en',
    messages: { vi, en }
})

const app = createApp(App)
app.use(router)
app.use(i18n)

router.afterEach((to) => {
    if (to.meta.title) {
        document.title = i18n.global.t(to.meta.title as string) as string
    }
})

watch(
    () => i18n.global.locale.value,
    () => {
        const currentRoute = router.currentRoute.value
        if (currentRoute.meta.title) {
            document.title = i18n.global.t(currentRoute.meta.title as string) as string
        }
    }
)

app.mount('#app')
