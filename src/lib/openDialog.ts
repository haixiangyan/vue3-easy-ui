import Dialog from './Dialog.vue';
import {createApp, h} from "vue";

const openDialog = (options) => {
  const {title, content, ok, cancel} = options;

  // 挂载 div
  const div = document.createElement('div');
  document.body.appendChild(div)

  // 创建 Dialog App
  const app = createApp({
    render() {
      return h(
        // 组件
        Dialog,
        // props
        {
          visible: true,
          title,
          content,
          ok,
          cancel,
          // 监听事件
          'onUpdate:visible': (newVisible) => {
            if (!newVisible) {
              app.unmount()
              div.remove()
            }
          },
        },
        // slots
        {
          title,
          content,
        }
      )
    }
  })

  app.mount(div);
}

export default openDialog;
