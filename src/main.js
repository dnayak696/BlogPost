import Vue from 'vue'
import App from './App.vue'

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)


Vue.config.productionTip = false




import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

import router from './router'
import store from './store'

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
