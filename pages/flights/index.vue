<template>
    <div class="flights">
        <div class="button-wrapper">

            <button @click="show = 'upcoming'" :class="show == 'upcoming' ? 'active' : ''">
                Upcoming flights
            </button>

            <button @click="show = 'past'" :class="show == 'past' ? 'active' : ''">
                Past flights
            </button>
        </div>
        <ul class="flight-list">
            <li class="flight" v-for="flight in flights" :key="flight.flight_number">
                <router-link :to="{ name: 'flights-id', params: { id: flight.flight_number } }">
                    <strong>{{ flight.rocket.rocket_name }}</strong>
                    <span>{{ flight.launch_site.site_name_long }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'FlightList',

    computed: {
        flights() {

            let upcoming = this.$store.state.upcoming;
            let past = this.$store.state.past;
            return ( this.show == 'upcoming' ? upcoming : past );

        },
    },

    data(){
        return{
            show: 'upcoming'
        }
    },


}

</script>
<style lang="scss">
    .button-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        
        button{
            background: #eee;
            border-radius: 4px 0 0 4px;
            border: 0;
            padding: 12px 24px;
            cursor: pointer;

            &:last-of-type{
                border-radius: 0 4px 4px 0;
            }

       
        }
    }
</style>