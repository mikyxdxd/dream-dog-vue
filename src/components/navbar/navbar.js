require('./navbar.scss')
module.exports = Vue.extend({

    template:require('./navbar.html'),
    methods:{

        toPosition(view){

            if(view != this.$get('currentView'));

            switch(view){

                case 'introduction':
                    $('html,body').animate({
                        scrollTop:0
                    }, 800);
                    break;

                case 'shelter':
                    $('html,body').animate({
                        scrollTop:$('#shelter').position().top
                    }, 800);
                    break;

                case 'feature':
                    $('html,body').animate({
                        scrollTop:$('#feature').position().top
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
        this.shelter_p=$('#shelter').position().top + $('#shelter').height() * 1/3;
        this.feature_p=$('#feature').position().top + $('#feature').height() * 1/3;
        var self = this;

        window.onscroll = function(){
            
         if($('body').scrollTop() <= self.feature_p){


             if($('body').scrollTop() <= self.shelter_p){

                 self.$set('currentView','introduction') ;
                 $('#nav_bar').css('margin-top','-25px');
                

             }else{

                 self.$set('currentView','shelter') ;
                 $('#nav_bar').css('margin-top','-75px');
             }

         }else{


             self.$set('currentView','feature') ;
             $('#nav_bar').css('margin-top','-125px');
         }
            
        }

    },
    data(){

        return{

            bone:require('../../resource/bone.png'),
            currentView:'introduction'

        }
    }

})