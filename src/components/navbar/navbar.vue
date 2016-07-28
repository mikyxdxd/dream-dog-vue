<template>
    <div class="vNav">
      <ul class="vNav">
        <li id="introduction">
          <a v-on:click="toPosition('introduction')">
            <div class="label">Section01</div>
          </a>
        </li>
        <li>
          <a v-on:click="toPosition('shelter')">
            <div class="label">Section02</div>
          </a>
        </li>
        <li>
          <a v-on:click="toPosition('feature')">
            <div class="label">Section03</div>
          </a>
        </li>
        <li>
          <a v-on:click="toPosition('contact')>
            <div class="label">Section04</div>
          </a>
        </li>
      </ul>
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
            $('#landing').fullpage.moveTo(1);
            break;

          case 'shelter':
            $('#landing').fullpage.moveTo(2);
            break;

          case 'feature':
            $('#landing').fullpage.moveTo(3);
            break;

          case 'contact':
            $('#landing').fullpage.moveTo(4);
            break;

          default:
            break;

        }

      }

    },
    ready(){

      var self = this;
      window.onscroll = function () {

        if ($('body').scrollTop() <=  $('#contact').position().top) {

          if ($('body').scrollTop() <= $('#feature').position().top) {

            if ($('body').scrollTop() <= $('#shelter').position().top) {

              $('#shelter_pb,#feature_pb').width(0);
              $('#title_pb').width($('body').scrollTop() / ($('#shelter').position().top) * $($('.process_bar_container')[0]).width());
              self.$set('currentView', 'introduction');
              $('#nav_bar').css('margin-top', '-25px');


            } else {

              $('#feature_pb').width(0);
              $('#title_pb').width($($('.process_bar_container')[0]).width());
              $('#shelter_pb').width(($('body').scrollTop() - $('#shelter').position().top) / $('#shelter').height() * $($('.process_bar_container')[0]).width());
              self.$set('currentView', 'shelter');
              $('#nav_bar').css('margin-top', '-75px');
            }

          } else {

            $('#title_pb,#shelter_pb').width($($('.process_bar_container')[0]).width());
            $('#feature_pb').width(($('body').scrollTop() - $('#feature').position().top) / $('#feature').height() * $($('.process_bar_container')[0]).width());
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
