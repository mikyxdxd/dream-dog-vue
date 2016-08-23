<script>

    export default{
        template:require('./feature.html'),
        ready(){
        },
        data(){
            return{

                feature_list: [
                    {
                        img: require('../../resource/mock_up_features_search_shelter.png'),
                        caption: 'search by shelter or people',
                        detail: 'Have a specific shelter in mind? Simply type in their name and volia!'
                    },
                    {
                      img: require('../../resource/mock_up_features_discover_breeds.png'),
                      caption: 'discover breeds',
                      detail: 'Learn about all your favourite breeds.'
                    },

                    {
                        img: require('../../resource/mock_up_features_personal_feed.png'),
                        caption: 'personal feed',
                        detail: 'Save all your favourite breeds to quickly see when one of your dream dogs appear within the app!'
                    },
                    {
                        img: require('../../resource/mock_up_features_similar_image.png'),
                        caption: 'similar image search',
                        detail: 'Have a dog in mind? Find all dogs that look similar to your ideal pup.'
                    },
                    {
                      img: require('../../resource/mock_up_features_search_breed.png'),
                      caption: 'search by breed',
                      detail: 'Browse alphabetically or type in the desired breed name.'
                    },

                ]
            }
        }
    }
</script>
