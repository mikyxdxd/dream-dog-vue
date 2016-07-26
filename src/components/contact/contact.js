require('./contact.scss');
var VueResource = require('vue-resource');
module.exports = Vue.extend({

    template:require('./contact.html'),
    data: ()=>{
        return{
            userName: '',
            email: '',
            message:'',
            teamMember: require('../../resource/team_members.png')
        }

    },

    methods: {
        submitForm: function(userName, email, message){
            console.log("Submit Form from here");
            console.log(userName);
            console.log(email);
            console.log(message);
            this.$http.post('http://localhost:3000/email',
                {user: userName,
                 email: email,
                 message, message}).then((response) =>
            {
                if(response.body.err){
                    console.log("SENT FAILED");
                    console.log(response);
                }else{
                    console.log("SENT SUCCESS");
                    console.log(response);
                }

            }, (response)=>{
                console.log("ERROR MSG");
                console.log(response);
            });
        }
    }





})