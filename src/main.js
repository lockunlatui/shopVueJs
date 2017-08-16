// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
var $ = require("jquery");

// export for others scripts to use
window.$ = $;
window.jQuery = $;

console.log(jQuery);
console.log($);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
require("./function.js");
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
