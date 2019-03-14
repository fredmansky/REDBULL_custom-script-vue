import Vue from 'vue';
import App from './App';

function start(options) {

  let config = {
    showGrid: process.env.NODE_ENV === "development"
  };

  Vue.config.productionTip = false;
  Vue.prototype.$myConfig = config;

  const vm = new Vue({
    el: options.el,
    data: {
      options
    },
    components: { App },
    template: "<App :options='options'/>"
  });
  return Promise.resolve({
    stop: () => vm.$destroy()
  });
}

export {start};
