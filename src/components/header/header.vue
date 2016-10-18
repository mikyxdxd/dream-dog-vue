<script>
  export default{
    methods: {

    },
    ready(){

    },
    template:require('./header.html'),
    data(){
      return {
        logo: require('../../resource/home.png'),
        slogo: require('../../resource/dream_dog_icon.png'),
        isResetps: this.$route.path.includes('/resetpassword')  ? true : false,
        currPage:'home'
      }
    },
    watch:{

      '$route.path': {
        handler: function (val, oldVal) {

          if(val == '/faq') this.currPage = 'help'
          else this.currPage  = 'home'

        },
        deep: true
      },
    }
  }
</script>
