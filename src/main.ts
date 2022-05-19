import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter} from "vue-router";

import Home from './views/Home.vue';
import Docs from './views/Docs.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/docs', component: Docs }
  ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
