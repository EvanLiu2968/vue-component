import Qrcode from './src/main';

/* istanbul ignore next */
Qrcode.install = function(Vue) {
  Vue.component(Qrcode.name, Qrcode);
};

export default Qrcode;
