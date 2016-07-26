import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
var app = Vue.extend({
    created:()=>{window.sr=ScrollReveal();}
})
import route from './route'
route(app)

