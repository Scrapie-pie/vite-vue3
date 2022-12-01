import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue';
import Index from './Index.vue';
import UI from './UI.vue';
//import './style.css'

const routes = [
  { path: "", component: Index },
  { path: "/ui",  component: UI },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const vueApp = createApp(App)
vueApp.use(router)
vueApp.mount('#app')