<script>
    export default {
        template: require('./shelter.html'),
        validators: {
          email: function (val) {
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
          }
        },
        methods: {
            onValidOrg: function(){
              this.validOrg = true;
            },
            onInvalidOrg: function () {
              this.validOrg = false;
            },
            onValidName: function(){
              this.validName = true;
            },
            onInvalidName: function(){
              this.validName = false;
            },
            onValidEmail: function(){
              this.validEmail = true;
            },
            onInvalidEmail: function(){
              this.validEmail = false;
            },
            submitForm: function(){
              if(this.validEmail && this.validName && this.validOrg){
                let user = "Org name: " + this.org + "\nContact name: " + this.org_name + "\nEmail: " + this.org_email;
                let message = user + "\nphone: " + this.org_phone0 + "-" + this.org_phone1 + "-" + this.org_phone2 + "\nWebsite:" + this.org_web;
                this.$http.post('/email',
                  {user: this.org_name,
                    email: this.org_email,
                    message: message,
                    option: "NONE"}).then((response) =>
                {
                  if(response.body.err){
                  toastr.options = {"timeOut": "5000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.error('Message Sent Falied! Please Try Again!');
                }else{
                  toastr.options = {"timeOut": "5000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.success('Thank you for contacting us! We will get back to you within 24 hours!');
                  $('form')[0].reset();
                }

              }, (response)=>{
                  toastr.options = {"timeOut": "5000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.error('Message Sent Falied! Please Try Again!');
                });
              }else{
                if(!this.validName || !this.validOrg){
                  toastr.options = {"timeOut": "3000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.error('Please enter all required fields!');
                }
                else if(!this.validEmail){
                  toastr.options = {"timeOut": "3000", "positionClass": "toast-top-full-width", "preventDuplicates": true};
                  toastr.error('Please enter a valid email address!');
                }

              }

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
          $(".org_phone").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
              // Allow: Ctrl+A
              (e.keyCode == 65 && e.ctrlKey === true) ||
              // Allow: Ctrl+C
              (e.keyCode == 67 && e.ctrlKey === true) ||
              // Allow: Ctrl+X
              (e.keyCode == 88 && e.ctrlKey === true) ||
              // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
              // let it happen, don't do anything
              return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
            }
          });
        },

        data: function () {
            return {
              validOrg: false,
              validName: false,
              validEmail: false,
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

                  name:'Charlie',
                  pic:'https://petstablished-app-beta.s3.amazonaws.com/uploads/image/image/99932/test_2F899f5b3e-85f5-4a47-b502-5f0b90cd97e3_2Ftest_image.jpg',
                  addr:'White River Animal Rescue, White River Junction, VT ',
                  intro:`Charlie is 25 lbs. Charlie and his litter mates are normal happy 10-week old puppies.`,
                  url:' http://www.whiteriveranimalrescue.org/Adoptable.html'

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
