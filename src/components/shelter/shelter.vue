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
