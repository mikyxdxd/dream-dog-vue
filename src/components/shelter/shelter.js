let Vue = require('vue');
require('./shelter.scss');
module.exports = Vue.extend({

    template:require('./shelter.html'),
    data:()=>{
        return {

            header:require('../../resource/adopt_header.png')
        }
    }

})