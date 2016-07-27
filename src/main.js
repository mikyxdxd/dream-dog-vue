import Vue from 'vue'
import VueRouter from 'vue-router'
var VueResource = require('vue-resource');
var VueValidator = require('vue-validator');
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueValidator);
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
var app = Vue.extend({

    created:()=>{
      window.sr=ScrollReveal();
    }
})
import route from './route'
route(app)

open
