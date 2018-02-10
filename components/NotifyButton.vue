<template>
    <button
        role="button" 
        class="button"
        @click="toggleSubscribe" 
        :class="subscribed ? 'subscribed' : ''"
    >
        {{buttonMessage}}
    </button>
</template>
<script>

    export default {
        name: 'Notify button',
        data(){
            return {
                subscribed: false
            }
        },
        created(){
            //check if already subscribed
        },
        computed: {
            buttonMessage(){
                return ( this.subscribed ? 'Unsubscribe' : 'Notify me!' );
            }
        },
        methods: {
            toggleSubscribe(){
                if( this.subscribed ){

                }else{

                }
            }
        }
        
    }