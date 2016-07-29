<template>
    <div class="vNav">
      <ul class="vNav">
        <li id="introduction">
          <a v-on:click="toPosition('introduction')">
            <div class="label">Introduction</div>
          </a>
        </li>
        <li>
          <a v-on:click="toPosition('shelter')">
            <div class="label">Shelter</div>
          </a>
        </li>
        <li>
          <a v-on:click="toPosition('feature')">
            <div class="label">Feature</div>
          </a>
        </li>
        <li>
          <a v-on:click="toPosition('contact')">
            <div class="label">Contact</div>
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
        var self = this;
        if (view != this.$get('currentView'));

        switch (view) {

          case 'introduction':
            self.$set('currentView', 'introduction');
            $.fn.fullpage.moveTo(1);
            $('.vNav ul li a').removeClass('active');
            $(this).addClass("active");
            break;

          case 'shelter':
            self.$set('currentView', 'shelter');
            $.fn.fullpage.moveTo(2);
            $('.vNav ul li a').removeClass('active');
            $(this).addClass("active");
            break;

          case 'feature':
            self.$set('currentView', 'feature');
            $.fn.fullpage.moveTo(3);
            $('.vNav ul li a').removeClass('active');
            $(this).addClass("active");
            break;

          case 'contact':
            self.$set('currentView', 'contact');
            $.fn.fullpage.moveTo(4);
            $('.vNav ul li a').removeClass('active');
            $(this).addClass("active");
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
