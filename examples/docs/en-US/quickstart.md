## Quick start

### Install

Installing with npm is recommended and it works seamlessly with webpack.

```shell
npm i @evanliu2968/vue-component --save
```

#### On demand

1. import single Component.
```js
import Vue from 'vue';
import Qrcode, { generateQRCode } from '@evanliu2968/vue-component/qrcode';
import App from './App.vue';

Vue.component(Qrcode.name, Qrcode);
/* or just
 * Vue.use(Qrcode)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

2. With the help of [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), we can import components we actually need, making the project smaller than otherwise.

First, install babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Then edit .babelrc:

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

Next, if you need Qrcode, edit main.js:

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

Full example (Component list reference [components.json](https://github.com/EvanLiu2968/vue-component/blob/master/components.json))