import i18next from 'i18next'
import english from './en.json'
import thailand from './th.json'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
    lng: 'th',
    resources: {
        en: english,
        th: thailand
    },
    react: {
        useSuspense: false
    },
    compatibilityJSON: 'v3'
})

export default i18next