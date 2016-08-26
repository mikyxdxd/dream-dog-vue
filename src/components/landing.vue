<script>


    export default {
        template: require('./landing.html'),
        ready(){

          if(this.$route.path == '/form'){

            $("html, body").animate({ scrollTop: $('#shelter').position().top + $('#shelter_icon').height() + 100}, 600);
          }

        },
        validators: {
          email: function (val) {

            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)

          }

        },

        methods:{
          onValid: function () {
            this.emailValid = true
          },
          onInvalid: function () {
            this.emailValid = false
          },
          submitForm: function(landEmail){
              if(this.emailValid){
                console.log("non valid");
                this.$http.post('/email',
                  {user: "NONE",
                    email: landEmail,
                    message: "from landing page",
                    option: "SAVE_EMAIL"}).then((response) =>
                {
                  if(response.body.err){
                  toastr.options = {"timeOut": "5000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.error('Message Sent Falied! Please Try Again!');
                }else{
                  toastr.options = {"timeOut": "5000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.success('Thank you for contacting us! We will get back to you within 24 hours!');
                  $('#landing_form_email').val('');
                }

              }, (response)=>{
                  toastr.options = {"timeOut": "5000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.error('Message Sent Falied! Please Try Again!');
                });
              }else{
                toastr.options = {"timeOut": "3000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                toastr.error('Please input a valid email address!');
              }
            },

          contactPage(direction){

            if(direction == 'in'){



              $('#contact').delay(300).fadeIn(500,()=>{

                $('.form-wrapper').addClass('animated fadeInDown');
                $('.form-wrapper').css('opacity',1)

              });

            }else{

              $('.form-wrapper').addClass('animated fadeOutUp')

              $('#contact').delay(100).fadeOut(500,()=>{


                $('.form-wrapper').css('opacity',0);
              $('.form-wrapper').removeClass('animated fadeInDown fadeOutUp');


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
                emailValid: false,
                dreamDogLogo:require('../resource/Dream_dog_logo.png'),
                appStore:require('../resource/app_store.png'),
                gooStore:require('../resource/google_play.png'),
                screenShots:require('../resource/app_mock_up.png'),
                comingSoon: require('../resource/coming_soon.png'),
            }
        },
        components:{
            shelter:require('./shelter/shelter.vue'),
            feature:require('./feature/feature.vue'),
            contact:require('./contact/contact.vue'),
            foot:require('./footer/footer.vue'),
            navbar:require('./navbar/navbar'),
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
