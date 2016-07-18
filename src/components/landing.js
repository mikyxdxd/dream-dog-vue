// var Vue = require('vue')
require('./landing.scss');
module.exports = Vue.extend({

    template:require('./landing.html'),
    data:()=>{
        return{

            dreamDogLogo:require('../resource/Dream_dog_logo.png'),
            appStore:require('../resource/app_store.png'),
            gooStore:require('../resource/google_play.png'),
            screenShots:require('../resource/app_mock_up.png')
        }
    },
    ready:()=>{

        skrollr.init();
        TweenLite.to($(".main_content"),1.5, {opacity:1,top:'0px',ease: 'Power4.easeOut'});
        // TweenLite.to($(".pur"),0.5, {'font-size':'1.1em'});
        // TweenLite.to($(".yel"),0.5, {'font-size':'1.1em'});
    },

    components:{

        shelter:require('./shelter/shelter'),
        feature:require('./feature/feature'),
        navbar:require('./navbar/navbar'),
        contact: require('./contact/contact'),
        foot: require('./footer/footer'),   //can not use footer as tag name in Vue since its a standard HTML tag name

    }

})

