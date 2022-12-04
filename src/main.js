import {createApp} from 'vue';
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue';
import Index from './Index.vue';
import UI from './UI.vue';
//import './style.css'

const routes = [
  { path: "/", name: 'Home', component: Index },
  { path: "/ui", name: 'ui', component: UI },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');