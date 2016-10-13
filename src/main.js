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

    // created:()=>{
    //   window.sr=ScrollReveal();
    // }

  ready(){

    if((/Android|iPhone|iPod|iPad|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){

      $('#app').addClass('res');

      require('./components/header/header_res.scss');
      require('./components/landing _res.scss');
      require('./components/footer/footer_res.scss');
      require('./components/shelter/shelter_res.scss');
      require('./components/navbar/navbar_res.scss');
      require('./components/contact/contact_res.scss');
      require('./components/feature/feature_res.scss');
      require('./components/faq/faq_res.scss');
      require('./components/pp/pp_res.scss');

    }else {

      $('#app').addClass('non-res');
      require('./components/header/header.scss');
      require('./components/landing.scss');
      require('./components/footer/footer.scss');
      require('./components/shelter/shelter.scss');
      require('./components/navbar/navbar.scss');
      require('./components/contact/contact.scss');
      require('./components/feature/feature.scss');
      require('./components/faq/faq.scss');
      require('./components/pp/pp.scss')
    }

  },

  components:{

    wheader:require('./components/header/header.vue'),
    wfooter:require('./components/footer/footer.vue')
  }
})
import route from './route'
route(app);
