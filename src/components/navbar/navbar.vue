<template>
    <div id="nav_bar">
        <div class="one_nav" :class="{'selected':currentView=='introduction'}" v-on:click="toPosition('introduction')">
            <div class="title">Introduction</div>
            <div class="process_bar_container"></div>
            <div class="process_bar" id="title_pb"></div>
        </div>
        <div class="one_nav" :class="{'selected':currentView=='shelter'}" v-on:click="toPosition('shelter')">
            <div class="title">Shelter</div>
          <div class="process_bar_container"></div>
          <div class="process_bar" id="shelter_pb"></div>
        </div>
        <div class="one_nav" :class="{'selected':currentView=='feature'}" v-on:click="toPosition('feature')">
            <div class="title">Feature</div>
            <div class="process_bar_container"></div>
            <div class="process_bar" id="feature_pb"></div>
        </div>
        <div class="one_nav" :class="{'selected':currentView=='contact'}" v-on:click="toPosition('contact')">
            <div class="title">Contact</div>
        </div>
    </div>
</template>
<script>
    require('./navbar.scss')
    export default{
        methods: {

            toPosition(view){

                if (view != this.$get('currentView'));

                switch (view) {

                    case 'introduction':
                        $('html,body').animate({
                            scrollTop: 0
                        }, 800);
                        break;

                    case 'shelter':
                        $('html,body').animate({
                            scrollTop: $('#shelter').position().top
                        }, 800);
                        break;

                    case 'feature':
                        $('html,body').animate({
                            scrollTop: $('#feature').position().top
                        }, 800);
                        break;

                    case 'contact':
                        $('html,body').animate({
                            scrollTop: $('#contact').position().top
                        }, 800);
                        break;

                    default:
                        break;

                }

            }

        },
        ready(){


            this.introduction_p = $('#hero_container').position().top;
            this.shelter_p = $('#shelter').position().top + $('#shelter').height() * 1 / 2;
            this.feature_p = $('#feature').position().top + $('#feature').height() * 1 / 2;
            this.contact_p = $('#contact').position().top + 400;
            var self = this;
            window.onscroll = function () {

                if ($('body').scrollTop() <= self.contact_p) {

                    if ($('body').scrollTop() <= $('#feature').position().top) {

                        if ($('body').scrollTop() <= $('#shelter').position().top) {


                            $('#title_pb').width(
                               $('body').scrollTop() / ($('#shelter').position().top)
                               * $($('.process_bar_container')[0]).width());

                            self.$set('currentView', 'introduction');
                            $('#nav_bar').css('margin-top', '-25px');


                        } else {


                            $('#title_pb').width($($('.process_bar_container')[0]).width());

                            console.log( $('body').scrollTop() / ($('#feature').position().top))

                            $('#shelter_pb').width(
                            $('body').scrollTop() / ($('#feature').position().top)
                            * $($('.process_bar_container')[0]).width());
                            self.$set('currentView', 'shelter');
                            $('#nav_bar').css('margin-top', '-75px');
                        }

                    } else {


                        self.$set('currentView', 'feature');
                        $('#nav_bar').css('margin-top', '-125px');
                    }

                } else {

                    $('#title_pb,#shelter_pb,#feature_pb').width($($('.process_bar_container')[0]).width());
                    self.$set('currentView', 'contact');
                    $('#nav_bar').css('margin-top', '-175px');

                }

            }

        },
        data(){

            return {

                bone: require('../../resource/bone.png'),
                currentView: 'introduction'

            }
        }
    }
</script>
