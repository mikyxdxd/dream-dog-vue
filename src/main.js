// var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
var App = Vue.extend({

    created:()=>{window.sr=ScrollReveal();}
});
require('./route')(App);

