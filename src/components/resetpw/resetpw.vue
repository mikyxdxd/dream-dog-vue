<script>
  export default{
    template:require('./resetpw.html'),
    data(){
      return{
        ps: '',
        confirmPs: '',
        key: this.$route.query.key,
        resetSuccess: false,
        lock: require('../../resource/lock_icon.png')
      }
    },

    ready(){

    },
    components:{

    },
    transitions:{
      'fade':{
              enterClass:'fadeIn',
              leaveClass:'fadeOutUp'
            }
    },
    methods:{
      submitForm: function(){
        var self = this;
        if(this.ps != this.confirmPs) {
          document.getElementById('ps-confirm').setCustomValidity("Passwords do not Match");
        }else{
          this.$http.post('http://service.dreamdogapp.com:8080/api/account/reset_password/finish',
            {"key": self.key,
             "newPassword": self.confirmPs
            }, {
              headers:{
                'Content-Type': 'application/json'
              }
            }).then((response)=>{
               if(response.status == 200){
                  self.resetSuccess = true;
               }else{
                 toastr.error("Errors, try again later");
               }
            });
        }
      }
    }
  }
</script>
