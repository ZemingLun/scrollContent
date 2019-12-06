import Vue from 'vue'
import App from './App.vue'
// import scrollContentDirective from './scrollContentDirective'
//
// Vue.use(scrollContentDirective)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
