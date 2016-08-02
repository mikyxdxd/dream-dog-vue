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
                  intro:'Trooper is a high energy 2 year-old who loves to play and run. He knows basic commands and is training with leash-walking. Trooper still has puppy tendencies but shows no aggression when in contact with other dogs or people. He is neutered, negative for heart worm and is up to date on vaccinations. All dogs leave the shelter with HomeAgain mircochip which is registered for life.',
                  url:'https://www.petfinder.com/petdetail/33715293'

                },{

                  name:'Bordeaux',
                  pic:'https://drpem3xzef3kf.cloudfront.net/photos/pets/35729134/2/?bust=1469410735&width=632&no_scale_up=1',
                  intro:`Meet Bordeaux! She is a loveable 2 yr., Welsh Pembroke Corgi blend. Bordeaux is full grown and weighs 14 lbs.

                    Welsh Pembroke Corgi dogs are said to be a somewhat smaller version of Corgis.

                      Bordeaux is spunky, energetic and pure puppy at heart.

                      Bordeaux is up-to-date with all shots, microchipped and spayed.`,
                  url:'https://www.petfinder.com/petdetail/35729134'

                },{

                  name:'Roxi',
                  pic:'https://drpem3xzef3kf.cloudfront.net/photos/pets/35785378/1/?bust=1469590107&width=632&no_scale_up=1',
                  intro:'Meet Roxi. Roxi is new to this new home thing. Her owner had her 4 of her fur siblings and then died suddenly.',
                  url:'https://www.petfinder.com/petdetail/35785378'

                },
                {

                  name:'Benni',
                  pic:'https://drpem3xzef3kf.cloudfront.net/photos/pets/35445937/3/?bust=1466522077&width=632&no_scale_up=1',
                  intro:'Hello my name is Benni I am 2 years old, and the sweetest thing you will meet.',
                  url:'https://www.petfinder.com/petdetail/35785378'

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
