import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            upcoming: [],
            past: []
        },
        getters: {
            byId: (state) => ( id ) => {
                
                let all = state.upcoming;
                Array.prototype.push.apply( all, state.past );
                
                return all.find( flight => { 
                    return flight.flight_number === parseInt( id )
                });      
                
            }
        },
        mutations: {
            saveUpcoming( state, launches ) {
                state.upcoming = launches
            },
            savePast( state, launches ) {
                state.past = launches
            }
        },
        actions: {

            save: ( context, data ) => {

                let mutation = 'saveUpcoming';
                if( data.type == 'past' ) mutation = 'savePast';

                context.commit( mutation, data.launches )
            },

        }
    })
}

export default createStore