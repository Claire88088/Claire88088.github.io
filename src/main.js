import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from "pinia"

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)

// import { useProjectsStore } from '/src/assets/stores/ProjectsStore.js'

// const projectsStore = useProjectsStore()
// console.log(projectsStore)

app.mount('#app')
