<script>
    export default {
        template: require('./shelter.html'),
        methods: {
            submitForm: function(){
              let user = "Org name: " + this.org + " Contact name: " + this.org_name;
              let message = "phone: " + this.org_phone0 + "-" + this.org_phone1 + "-" + this.org_phone2 + "\nWebsite:" + this.org_web;
              this.$http.post('/email',
                {user: user,
                  email: this.org_email,
                  message: message,
                  option: "NONE"}).then((response) =>
              {
                if(response.body.err){
                toastr.options = {"timeOut": "10000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                toastr.error('Message Sent Falied! Please Try Again!');
              }else{
                toastr.options = {"timeOut": "10000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                toastr.success('Thank you for contacting us! We will get back to you within 24 hours!');
                $('form')[0].reset();
              }

            }, (response)=>{
                toastr.options = {"timeOut": "10000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                toastr.error('Message Sent Falied! Please Try Again!');
              });
            },

            changeHoverState: function (shelter) {


               shelter.hover = false;

            },

          showInfo:function(i){

            $($('.dog_info')[i]).slideDown();

          },

          hideInfo:function(i){

            $($('.dog_info')[i]).slideUp();

          },

            changeState: function (shelter) {

               shelter.hover = true;
            }
        },

        ready: function () {
//          var config = {
//            delay    : 100,
//            distance : '70px',
//            easing   : 'ease-in-out',
//            rotate   : { y: -10 },
//            scale    : 0,
//            duration: 1000
//          }
//            sr.reveal('.s_icon', config, 100);

        },

        data: function () {
            return {
              org: '',
              org_name:'',
              org_email: '',
              org_phone0: '',
              org_phone1:'',
              org_phone2:'',
              org_web:'',
              dogs:[

                {

                  name:'Trooper',
                  pic:'https://drpem3xzef3kf.cloudfront.net/photos/pets/33715293/1/?bust=1446813929&width=632&no_scale_up=1',
                  addr:'Huntington Shelter and Adoption Center East Northport, NY',
                  intro:'Trooper is a high energy 2 year-old who loves to play and run. He knows basic commands and is training with leash-walking.',
                  url:'http://www.huntingtonny.gov/content/13749/13839/16437/16539/default.aspx'
                },{

                  name:'Bordeaux',
                  pic:'https://drpem3xzef3kf.cloudfront.net/photos/pets/35729134/2/?bust=1469410735&width=632&no_scale_up=1',
                  addr:'Ken-Mar Rescue Los Angeles, CA',
                  intro:`Meet Bordeaux! She is a loveable 2 yr. , Welsh Pembroke Corgi blend. Bordeaux is full grown and weighs 14 lbs.`,
                  url:' http://www.kenmarrescue.org/our-adoptable-dogs/current-orphans/'

                },{

                  name:'Kelle',
                  pic:'https://www.adorehouston.org/wp-content/uploads/2016/05/IMG_3611.jpg',
                  addr:'ADORE Houston Boston, MA',
                  intro:'Hey guys. I am Kelle and I am a 4 year old Border Collie mix. I am an awesome little girl that enjoys being the official ADORE greeter at adoption events because I love being the center of attention.',
                  url:'https://www.adorehouston.org/portfolio/kelle-2/'

                },
                {

                  name:'Benni',
                  pic:'https://drpem3xzef3kf.cloudfront.net/photos/pets/35445937/3/?bust=1466522077&width=632&no_scale_up=1',
                  addr:'ADORE Houston Boston, MA',
                  intro:'Hello my name is Benni I am 2 years old, and the sweetest thing you will meet.',
                  url:'https://www.adorehouston.org/portfolio/benni/'

                }
              ],

                backgroundImage: require('../../resource/adopt_header.png'),
                formDog: require('../../resource/form_element.png'),
                shelters: [
                    {
                        hover: false,
                        bg: require('../../resource/Shelters/KMR_normal.png'),
                        bg_h: require('../../resource/Shelters/KMR_hover_state.png'),
                        a: "http://www.kenmarrescue.org/"
                    },
                    {
                        hover: false,
                        bg: require('../../resource/Shelters/ADORE_normal.png'),
                        bg_h: require('../../resource/Shelters/ADORE_hover_state.png'),
                        a: "https://www.adorehouston.org/"
                    },
                    {
                      hover: false,
                      bg: require('../../resource/Shelters/HSE_normal.png'),
                      bg_h: require('../../resource/Shelters/HSE_hover_state.png'),
                      a: "http://www.huntingtonny.gov/animal-shelter"
                    },

                    {
                      hover: false,
                      bg: require('../../resource/Shelters/BLAPCWR_normal.png'),
                      bg_h: require('../../resource/Shelters/BLAPCWR_hover_state.png'),
                      a: "http://www.bullluvablepaws.com/"
                    },
                    {
                      hover: false,
                      bg: require('../../resource/Shelters/PP_normal.png'),
                      bg_h: require('../../resource/Shelters/PP_hover_state.png'),
                      a:"http://www.positivepawsrescue.com/"
                    }




                ]
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
