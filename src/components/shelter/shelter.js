// let Vue = require('vue');
require('./shelter.scss');
module.exports = Vue.extend({

    template:require('./shelter.html'),

    methods:{

        changeHoverState:function(shelter){

           shelter.$set('hover',false);
        },

        changeState:function(shelter){

            shelter.$set('hover',true);
        }

    },

    ready:function(){

        sr.reveal('.s_icon', { duration: 2000 },500);

    },

    data: function(){
        return {

            backgroundImage:require('../../resource/adopt_header.png'),
            shelters:[{hover:false,bg:require('../../resource/Shelters/HSE_normal.png'),bg_h:require('../../resource/Shelters/HSE_hover_state.png')},
                {hover:false,bg:require('../../resource/Shelters/KMR_normal.png'),bg_h:require('../../resource/Shelters/KMR_hover_state.png')},
                {hover:false,bg:require('../../resource/Shelters/SAH_normal.png'),bg_h:require('../../resource/Shelters/SAH_hover_state.png')}



            ]
        }
    }

})