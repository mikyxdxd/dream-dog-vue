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
    }
  })
  router.start(App, '#app')
}

