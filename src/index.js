import Vue from 'vue';
import App from './App';

function start(options) {

  Vue.config.productionTip = false;

  const vm = new Vue({
    el: options.el,
    components: { App },
    template: '<App/>'
  });
  return Promise.resolve({
    stop: () => vm.$destroy()
  });
}

export {start};
