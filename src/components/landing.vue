<script>

    require('./landing.scss')
    export default {
        template: require('./landing.html'),
        ready(){

            var self = this;
//          if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
//            skrollr.init().refresh();
//          }
              TweenLite.to($(".main_content"),1.5, {opacity:1,top:'0px',ease: 'Power4.easeOut'});

               $('#landing').fullpage(
                {


                  onLeave: function(index, nextIndex, direction){
                    $('.vNav ul li a').removeClass('active');
                    $($('.vNav ul li a').get(nextIndex-1)).addClass('active');
                    console.log(index, nextIndex, direction)

                    switch(direction){

                      case 'down':
                            switch(index){
                              case 1:
//                                    $('#container_left').addClass('animated fadeOutUp');
//                                    $('#container_right').addClass('animated fadeOutUp');
//                                    $('#landing_sec').delay(500).fadeOut();
                                    switch(nextIndex){
                                      case 2:
                                        self.landingPage('out');
                                        self.shelterPage('in');
                                        break;
                                      case 3:
                                        self.landingPage('out');
                                        self.featurePage('in');
                                        break;
                                      case 4:
                                        self.landingPage('out');
                                        self.contactPage('in');
                                        break;
                                    }
                                    break;

                              case 2:
                                    switch(nextIndex){
                                      case 3:
                                        self.shelterPage('out');
                                        self.featurePage('in');
                                        break;
                                      case 4:
                                        self.shelterPage('out');
                                        self.contactPage('in');
                                        break;
                                    }
                                    break;

                              case 3:
                                    self.contactPage('in');
                                    self.featurePage('out')
                                    break;


                            }
                            break;

                      case 'up':
                        switch(index){
                          case 2:
                            self.shelterPage('out');
                            self.landingPage('in');
                            break;

                          case 3:
                            switch(nextIndex){
                              case 2:
                                self.featurePage('out');
                                self.shelterPage('in');
                                break;
                              case 1:
                                self.featurePage('out');
                                self.landingPage('in');
                                break;
                            }


                          case 4:
                            switch(nextIndex){
                              case 3:
                                self.contactPage('out');
                                self.featurePage('in');
                                break;
                              case 2:
                                self.contactPage('out');
                                self.shelterPage('in');
                                break;
                              case 1:
                                self.contactPage('out');
                                self.landingPage('in');
                                break;
                            }

                        }
                        break;
                    }



                  },
                  scrollingSpeed: 700,
                  scrollDelay: 1000,
                  easing: 'easeInOutCubic'

                })

        },

        methods:{

          contactPage(direction){

            if(direction == 'in'){



              $('#contact').delay(300).fadeIn(500,()=>{

                $('.form-wrapper').addClass('animated flipInY')
                $('.form-wrapper').css('opacity',1)

              });

            }else{

              $('.form-wrapper').addClass('animated flipOutY')

              $('#contact').delay(100).fadeOut(500,()=>{


                $('.form-wrapper').css('opacity',0);
              $('.form-wrapper').removeClass('animated flipInY flipOutY');


              });

            }
          },

          featurePage(direction){

            if(direction == 'in') {

              $('#feature').delay(100).fadeIn(500,()=>{
                $('#feature #caption').addClass('animated flipInX')
              $('#feature #caption').css('opacity',1);
                $('#feature .card-content').each((i, ele)=>{
                $(ele).addClass('animated fadeInUp')
                $(ele).css('opacity',1);
                })
              $('#feature .card-image').each((i, ele)=>{
                $(ele).addClass('animated fadeIn')
                $(ele).css('opacity',1);
                })
              });


            }else{

              $('#feature #caption').addClass('animated flipOutX');
              $('#feature .card-content').each((i, ele)=>{
                $(ele).addClass('fadeOutDown')
                $(ele).css('opacity',0);
              })
              $('#feature .card-image').each((i, ele)=>{
                $(ele).addClass('fadeOut')
                $(ele).css('opacity',0);
              })
              $('#feature').delay(500).fadeOut(500,()=>{

                $('#feature #caption').css('opacity',0);
              $('#feature #caption').removeClass('animated flipOutX flipInX')

                $('#feature .card-content').each((i, ele)=>{
                  $(ele).removeClass('animated fadeInUp fadeOutDown')
                })
              $('#feature .card-image').each((i, ele)=>{
                $(ele).removeClass('animated fadeOut fadeIn')
            })

              })

            }

          },

          landingPage(direction){

            if(direction == 'out'){

                 $('#hero_container #container_left').addClass('animated fadeOutUp');
              $('#hero_container #container_left').css('opacity',0)
                 $('#hero_container #container_right').addClass('animated fadeOutUp');
              $('#hero_container #container_right').css('opacity',0)
                 $('#hero_container').delay(100).fadeOut(500,()=>{

                   $('#hero_container #container_left').removeClass('animated fadeOutUp fadeInDown');
              $('#hero_container #container_right').removeClass('animated fadeOutUp fadeInDown');
                 })


            }else{

              $('#hero_container').delay(100).fadeIn(500,()=>{
                $('#hero_container #container_left').addClass('animated fadeInDown');
              $('#hero_container #container_left').css('opacity',1)
              $('#hero_container #container_right').addClass('animated fadeInDown');
              $('#hero_container #container_left').css('opacity',1)


              })

            }

          },

          shelterPage(direction){

            if(direction == 'out') {

              $('#shelter #main_caption').addClass('animated flipOutX')
              $('.s_icon').each((i, ele)=>{
                $(ele).delay(i * 1000).addClass('fadeOutDown')
            })
              $('#shelter').delay(100).fadeOut(500,()=>{
                $('#landing_sec').fadeIn();
              $('#shelter #main_caption').removeClass('animated flipOutX flipInX')
              $('#shelter #main_caption').css('opacity', 0);
              $('.s_icon').each((i, ele)=>{
                $(ele).delay(i * 1000).removeClass('animated fadeOutDown')
            })
            })
              ;
            }else{

              $('#shelter').delay(100).fadeIn(500,()=>{
                $('#landing_sec').hide();
              $('.s_icon').each((i,ele)=>{
                $(ele).delay(i * 1000).addClass('animated fadeInUp')}
            )
              $('#shelter #main_caption').addClass('animated flipInX')
              $('#shelter #main_caption').css('opacity',1);
            });

            }

          }
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
