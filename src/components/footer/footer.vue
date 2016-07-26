<script>
    require('./footer.scss')
    export default{
       template:require('./footer.html'),
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
