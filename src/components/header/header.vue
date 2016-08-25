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
