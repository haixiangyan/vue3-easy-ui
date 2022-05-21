import {createRouter, createWebHashHistory} from "vue-router";

import Home from './views/Home.vue';
import Docs from './views/Docs.vue';
import SwitchDemo from './components/SwitchDemo.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/docs',
      component: Docs,
      children: [
        { path: 'switch', component: SwitchDemo }
      ]
    }
  ]
});

export default router;
