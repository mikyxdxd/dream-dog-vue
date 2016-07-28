<script>

    require('./landing.scss')
    export default {
        template: require('./landing.html'),
        ready(){
//          if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
//            skrollr.init().refresh();
//          }
              TweenLite.to($(".main_content"),1.5, {opacity:1,top:'0px',ease: 'Power4.easeOut'});
              $('#landing').fullpage(
                {

                  onLeave: function(index, nextIndex, direction){
                    console.log(index, nextIndex, direction)

                    switch(direction){

                      case 'down':
                            switch(index){
                              case 1:
                                    $('#container_left').addClass('animated fadeOutUp');
                                    $('#container_right').addClass('animated fadeOutUp');
                                    $('#shelter').delay(500).fadeIn(500,()=>{
                                        $('#landing_sec').hide();
                                        $('.s_icon').each((i,ele)=>{

                                          $(ele).css('-vendor-animation-delay',0.5*(i + 1) + 's')
                                          $(ele).delay(i * 1000).addClass('animated fadeInUp')}

                                        )
                                    });
                                    break;
                            }
                            break;

                      case 'up':
                        switch(index){
                          case 2:
                            $('#container_left').removeClass('animated fadeOutUp');
                            $('#container_right').removeClass('animated fadeOutUp');
                            $('#shelter').fadeOut(500,()=>{
                              $('#landing_sec').fadeIn();
                            });
                            $('#container_left').addClass('animated fadeInDown');
                            $('#container_right').addClass('animated fadeInDown');
                            break;
                        }
                        break;
                    }



                  },
                  scrollingSpeed: 700,
                  scrollDelay: 1000,
                  easing: 'easeInOutCubic'

                })

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
