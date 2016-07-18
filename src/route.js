module.exports =  function(App){

    var VueRouter = require('vue-router');
    var Vue = require('vue')
    var router = new VueRouter({
        hashbang: false,
        history: false,
        root: '/'
    });

    router.beforeEach(function (transition) {
        setTimeout(()=>{

            window.scrollTo(0, 0)
          //  $('body').css('overflow',hidden)


        },100)
        transition.next()
    })

    router.map({
        '/': {
            component: require('./components/landing')
        }
    });

    router.start(App, '#app');

}