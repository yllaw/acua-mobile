import Vue from 'nativescript-vue'
import store from './store'
import Home from './views/Home.vue'
import VueDevtools from 'nativescript-vue-devtools'
import RadDataFormPlugin from 'nativescript-ui-dataform/vue'

Vue.use(RadDataFormPlugin)

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(Home)])
}).$start()
