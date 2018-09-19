/* Automatically generated by './build/bin/build-entry.js' */

import Alert from '../packages/alert/index.js';
import Qrcode from '../packages/qrcode/index.js';
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Alert,
  Qrcode,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(Loading.directive);

  // Vue.prototype.$ELEMENT = {
  //   size: opts.size || '',
  //   zIndex: opts.zIndex || 2000
  // };

  // Vue.prototype.$loading = Loading.service;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.1.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Alert,
  Qrcode
};

module.exports.default = module.exports;
