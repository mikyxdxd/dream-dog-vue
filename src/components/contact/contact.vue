<script>
    require('./contact.scss')
    export default{
        template: require('./contact.html'),
        data:()=>{
            return{
                teamMember: require('../../resource/team_members.png')
            }
        },

        methods: {
            submitForm: function () {
                console.log("Submit Form from here");
            }
        }
    }
</script>
