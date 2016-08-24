<script>
  export default{
    methods: {

    },
    ready(){

    },
    template:require('./header.html'),
    data(){
      return {
        logo: require('../../resource/Profile.jpg'),
        bone: require('../../resource/bone.png'),
        currPage:'home'
      }
    },
    watch:{

      '$route.path': {
        handler: function (val, oldVal) {

          if(val == '/') this.currPage = 'home'
          else this.currPage  = 'help'

        },
        deep: true
      },
    }
  }
</script>
