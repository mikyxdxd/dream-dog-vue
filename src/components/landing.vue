<script>
    require('./landing.scss')
    export default {
        template: require('./landing.html'),
        ready(){
            skrollr.init();
            TweenLite.to($(".main_content"),1.5, {opacity:1,top:'0px',ease: 'Power4.easeOut'});
            console.log(this.$data)
        },
        data () {
            return {
                dreamDogLogo:require('../resource/Dream_dog_logo.png'),
                appStore:require('../resource/app_store.png'),
                gooStore:require('../resource/google_play.png'),
                screenShots:require('../resource/app_mock_up.png')
            }
        },
        components:{
            shelter:require('./shelter/shelter.vue'),
            feature:require('./feature/feature.vue'),
            contact:require('./contact/contact.vue'),
            foot:require('./footer/footer.vue'),
            navbar:require('./navbar/navbar')
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->