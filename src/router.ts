import {createRouter, createWebHashHistory} from "vue-router";

import Home from './views/Home.vue';
import Docs from './views/Docs.vue';
import DocsDemo from './components/DocsDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import {h} from "vue";

const markdown = (filename: string) => {
  return h(Markdown, { path: `../markdown/${filename}.md`, key: filename });
}

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/docs',
      component: Docs,
      children: [
        { path: '', component: DocsDemo },
        { path: 'intro', component: markdown('intro') },
        { path: 'get-started', component: markdown('get-started') },
        { path: 'install', component: markdown('install') },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    }
  ]
});

export default router;
