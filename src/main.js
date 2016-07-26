// var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
Vue.use(VueRouter);
Vue.use(VueResource);
var App = Vue.extend({

    created:()=>{window.sr=ScrollReveal();}

});
require('./route')(App);

