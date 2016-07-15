var Vue = require('vue')
require('./landing.scss');
module.exports = Vue.extend({

    template:require('./landing.html'),
    data:()=>{

        return {

            dreamDogLogo:require('../resource/Dream_dog_logo.png'),
            appStore:require('../resource/app_store.png'),
            gooStore:require('../resource/google_play.png'),
            screenShots:require('../resource/app_mock_up.png')

        }
    },
    components:{

        shelter:require('./shelter/shelter')

    }

})

