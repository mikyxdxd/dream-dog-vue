// let Vue = require('vue');
require('./shelter.scss');
module.exports = Vue.extend({

    template:require('./shelter.html'),

    ready:function(){

        sr.reveal('.s_icon', { duration: 2000 },500);

    },

    data: function(){
        return {

            backgroundImage:require('../../resource/adopt_header.png')
        }
    }

})