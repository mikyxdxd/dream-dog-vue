module.exports =  function(App){

    var VueRouter = require('vue-router');
    var Vue = require('vue')
    var router = new VueRouter({
        hashbang: false,
        history: false,
        root: '/'
    });

    router.map({
        '/': {
            component: require('./components/landing')
        }
    });

    router.start(App, '#app');

}