// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import Element from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// 尺寸适配
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
