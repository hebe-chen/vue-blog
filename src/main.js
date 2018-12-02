// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import hljs from 'highlight.js'

import 'highlight.js/styles/agate.css'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.use(VueResource)

Vue.config.productionTip = false

import './common/style/base.css';
import './common/style/markdown.scss';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
