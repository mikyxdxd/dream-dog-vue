<template>
    <div class="vNav">
      <ul class="vNav">
        <li id="introduction">
          <div class="title">Introduction</div>
          <a class="active" v-on:click="toPosition('introduction')" v-on:mouseover="showTitle($event)" v-on:mouseleave="hideTitle($event)" >
          </a>
        </li>
        <li>
          <div class="title">Shelter</div>
          <a v-on:click="toPosition('shelter')" v-on:mouseover="showTitle($event)" v-on:mouseleave="hideTitle($event)" >

          </a>
        </li>
        <li>
          <div class="title">Feature</div>
          <a v-on:click="toPosition('feature')" v-on:mouseover="showTitle($event)" v-on:mouseleave="hideTitle($event)" >

          </a>
        </li>
        <li >
          <div class="title">Contact</div>
          <a v-on:click="toPosition('contact')" v-on:mouseover="showTitle($event)" v-on:mouseleave="hideTitle($event)" >
          </a>
        </li>
      </ul>
    </div>
</template>
<script>
  export default{
    methods: {

      showTitle(event){

        $(event.target).prev().removeClass('animated fadeOutDown fadeInUp')
        $(event.target).prev().addClass('animated fadeInUp');
//        $(event.target).prev().css('opacity',1);


      },

      hideTitle(event){

        $(event.target).prev().removeClass('animated fadeOutDown fadeInUp')
        $(event.target).prev().addClass('animated fadeOutDown');
//        $(event.target).prev().css('opacity',0);
//        $(event.target).prev().delay(500).removeClass('animated fadeOutDown fadeInUp')

      },

      toPosition(view){
        var self = this;
        if (view != this.$get('currentView'));

        switch (view) {

          case 'introduction':
            self.$set('currentView', 'introduction');
            $.fn.fullpage.moveTo(1);
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq(0)').addClass("active");
            break;

          case 'shelter':
            self.$set('currentView', 'shelter');
            $.fn.fullpage.moveTo(2);
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq(1)').addClass("active");
            break;

          case 'feature':
            self.$set('currentView', 'feature');
            $.fn.fullpage.moveTo(3);
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq(2)').addClass("active");
            break;

          case 'contact':
            self.$set('currentView', 'contact');
            $.fn.fullpage.moveTo(4);
            $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq(3)').addClass("active");
            break;

          default:
            break;


        }

      }

    },

    data(){

      return {

        currentView: 'introduction'

      }
    }
  }
</script>
