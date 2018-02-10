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
                    <span class="date">{{ flightDate( flight ) }}</span>
                    <span>{{ flight.launch_site.site_name_long }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>

import moment from 'moment';

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

    methods:{

        flightDate( flight ){
            let _days = parseInt( moment().diff( flight.launch_date_local, 'days' ) );
            let _plural = 's';

            if( _days < 0 ){
                return 'In '+ parseInt( _days * -1 ) +' days';
            }else if( _days > 0 && _days < 365 ){
                if( _days == 1 ) _days = '';
                return `${_days} day${_plural} ago`;
            }else{
                let _years = moment().diff( flight.launch_date_local, 'years' );
                if( _years == 1 ) _plural = '';
                return `${_years} year${_plural} ago`;

            }
        }
    }

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