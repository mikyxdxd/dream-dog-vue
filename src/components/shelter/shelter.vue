<script>
    export default {
        template: require('./shelter.html'),
        methods: {

            changeHoverState: function (shelter) {

                shelter.hover = false;
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

                  name:'Roxi',
                  pic:'https://www.adorehouston.org/wp-content/uploads/2016/05/IMG_3611.jpg',
                  addr:'',
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
                shelters: [
                    {
                        hover: false,
                        bg: require('../../resource/Shelters/HSE_normal.png'),
                        bg_h: require('../../resource/Shelters/HSE_hover_state.png'),
                        a: "http://www.huntingtonny.gov/animal-shelter"
                    },
                    {
                        hover: false,
                        bg: require('../../resource/Shelters/KMR_normal.png'),
                        bg_h: require('../../resource/Shelters/KMR_hover_state.png'),
                        a: "http://www.kenmarrescue.org/our-adoptable-dogs/current-orphans/"
                    },

                    {
                        hover: false,
                        bg: require('../../resource/Shelters/SAH_normal.png'),
                        bg_h: require('../../resource/Shelters/SAH_hover_state.png'),
                        a: "http://statelineah.com/"
                    },

                  {
                    hover: false,
                    bg: require('../../resource/Shelters/ADORE_normal.png'),
                    bg_h: require('../../resource/Shelters/ADORE_hover_state.png'),
                    a: "https://www.adorehouston.org/"
                  },

                  {
                    hover: false,
                    bg: require('../../resource/Shelters/BLAPCWR_normal.png'),
                    bg_h: require('../../resource/Shelters/BLAPCWR_hover_state.png'),
                    a: "http://www.bullluvablepaws.com/"
                  },




                ]
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
