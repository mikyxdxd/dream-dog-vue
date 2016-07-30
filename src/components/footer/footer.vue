<script>

    export default{
       template:require('./footer.html'),
        ready(){
          if(!(/Android|iPhone|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
            require('./footer.scss');
            console.log("non phone");
          }
        },
        data:()=> {
        return {
            footerimg: require('../../resource/footer_ilustrastion.png'),
            appleStore: require('../../resource/app_store.png'),
            gooogleStore:require('../../resource/google_play.png'),
            emailicon: require('../../resource/email_icon.png'),
            fb: require('../../resource/facebook.png'),
            ins: require('../../resource/instagram.png'),
            twit:require('../../resource/twitter.png'),
        }
      }
    }
</script>
