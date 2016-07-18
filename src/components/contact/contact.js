require('./contact.scss');
module.exports = Vue.extend({

    template:require('./contact.html'),
    data:()=> {
        return {
            teamMember: require('../../resource/team_members.png')
        }
    },

    methods: {
        submitForm: function(){
            console.log("Submit Form from here");
        }
    }





})