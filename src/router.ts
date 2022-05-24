import {createRouter, createWebHashHistory} from "vue-router";

import Home from './views/Home.vue';
import Docs from './views/Docs.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';

import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

import {h} from "vue";

const markdown = (content: string, key: string) => {
  return h(Markdown, { content: content, key });
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
        { path: '', redirect: '/docs/intro' },
        { path: 'intro', component: markdown(intro, 'intro') },
        { path: 'get-started', component: markdown(getStarted, 'get-started') },
        { path: 'install', component: markdown(install, 'install') },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    }
  ]
});

export default router;
