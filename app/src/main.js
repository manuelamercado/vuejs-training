import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('placeTH', function (value) {
  if(value === 1){ return `${value}st`;}
  else if(value === 2){ return `${value}nd`;}
  else if(value === 3){ return `${value}rd`;}
  else { return `${value}th`;}
})

new Vue({
  render: h => h(App),
}).$mount('#app')
