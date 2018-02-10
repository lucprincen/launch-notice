<template>
    <div class="flight-details">
        <div class="detail" v-if="!error">
            <div class="content">
                <h2>
                    <span class="flight-num">{{ flight.flight_number }}</span>
                    <span>{{ flight.rocket.rocket_name }}</span>
                </h2>
                <p>{{ flight.details }}</p>
            </div>

            <img v-if="flight.links.mission_patch" :src="flight.links.mission_patch" class="mission-patch"/>

            <div class="video" v-if="flight.links.video_link !== null">
                <youtube :video-id="videoId" :player-height="731"></youtube>
            </div>
            <div class="rockets">

            </div>
            
        </div>  
        <div class="error" v-if="error">
            <strong>Flight not found.</strong>
        </div>
    </div>
</template>
<script>    

    export default {
        name: 'FlightDetail',
        /*async beforeCreate(){
            let upcoming = await this.$axios.$get('https://api.spacexdata.com/v2/launches/upcoming');
            let past = await this.$axios.$get('https://api.spacexdata.com/v2/launches');

            this.$store.dispatch( 'save', { launches: upcoming, type: 'upcoming' });
            this.$store.dispatch( 'save', { launches: past.reverse(), type: 'past' });
        },*/
        created () {

            setTimeout( () => {
                this.setFlight()
            }, 500 );
            
        },
        data(){
            return {
                flight: {},
                error: true
            }
        },
        computed: {
            videoId(){
                return this.$youtube.getIdFromURL( this.flight.links.video_link );
            }
        },
        methods: {
            async oembedLink(){
                
            },
            setFlight(){
                
                let _flight = this.$store.getters.byId( this.$route.params.id );
                
                if( typeof( _flight ) == 'undefined' ){
                    this.error = true;
                }else{
                    this.error = false;
                }
                console.log( _flight );
                this.flight = _flight;   
            }
        }
    }

</script>
