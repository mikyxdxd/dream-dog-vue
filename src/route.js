export default (App) => {
  var VueRouter = require('vue-router')
  var router = new VueRouter({
    hashbang: false,
    history: false,
    root: '/'
  })
  router.beforeEach(function (transition) {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    transition.next()
  })
  router.map({
    '/': {
      component: require('./components/landing.vue')
    },
    '/form':{
      component: require('./components/landing.vue')
    },
    '/faq':{
      component: require('./components/faq/faq.vue')
    },
    '/pp':{
      component: require('./components/pp/pp.vue')
    },
    '/tos':{
      component: require('./components/tos/tos.vue')
    },

    '/resetpassword':{
      component: require('./components/resetpw/resetpw.vue')
    }
  })
  router.start(App, '#app')
}

