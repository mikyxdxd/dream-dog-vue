<script>
  export default{
    template:require('./resetpw.html'),
    data(){
      return{
        ps: '',
        confirmPs: '',
        key: this.$route.query.key,
      }
    },

    ready(){

    },
    components:{

    },
    methods:{
      submitForm: function(){
        var self = this;
        if(this.ps != this.confirmPs) {
          document.getElementById('ps-confirm').setCustomValidity("Passwords Don't Match");
        }else{
          this.$http.post('http://service.dreamdogapp.com:8080/api/account/reset_password/finish',
            {"key": self.key,
             "newPassword": self.confirmPs
            }, {
              headers:{
                'Content-Type': 'application/json'
              }
            }).then((response)=>{
               console.log(response);
               if(response.status == 200){

               }else{

               }
            });
        }
      }
    }
  }
</script>
