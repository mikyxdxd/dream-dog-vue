<script>
    require('./shelter.scss')
    export default {
        template: require('./shelter.html'),
        methods: {

            changeHoverState: function (shelter) {

                shelter.$set('hover', false);
            },

            changeState: function (shelter) {

                shelter.$set('hover', true);
            }
        },

        ready: function () {

            sr.reveal('.s_icon', {duration: 2000}, 300);

        },

        data: function () {
            return {

                backgroundImage: require('../../resource/adopt_header.png'),
                shelters: [{
                    hover: false,
                    bg: require('../../resource/Shelters/HSE_normal.png'),
                    bg_h: require('../../resource/Shelters/HSE_hover_state.png')
                },
                    {
                        hover: false,
                        bg: require('../../resource/Shelters/KMR_normal.png'),
                        bg_h: require('../../resource/Shelters/KMR_hover_state.png')
                    },

                    {
                        hover: false,
                        bg: require('../../resource/Shelters/SAH_normal.png'),
                        bg_h: require('../../resource/Shelters/SAH_hover_state.png')
                    }
                ]
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->