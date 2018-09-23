## 快速上手

### 安装

推荐使用 npm 的方式安装，它能更好地和`webpack`打包工具配合使用。

```shell
npm i @evanliu2968/vue-component --save
```

#### 按需引入

1. 直接单个组件引入
```js
import Vue from 'vue';
import Qrcode, { generateQRCode } from '@evanliu2968/vue-component/qrcode';
import App from './App.vue';

Vue.component(Qrcode.name, Qrcode);
/* 或写为
 * Vue.use(Qrcode)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

2. 借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@evanliu2968/vue-component",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Qrcode } from '@evanliu2968/vue-component';
import App from './App.vue';

Vue.component(Qrcode.name, Qrcode);
/* 或写为
 * Vue.use(Qrcode)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](https://github.com/EvanLiu2968/vue-component/blob/master/components.json) 为准）