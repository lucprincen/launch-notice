<template>
    <section class="container">
        <app-header></app-header>
        <section class="mission">
            <p>Do you think it's awesome to check live rocket launches? Then get notified when they happen!</p>
        </section>
        <router-view></router-view>
        <footer>
            <span>A little side-project by <a href="https://lucp.nl">@LucP</a></span>
            <span class="right">
                <a href="https://github.com/lucprincen/launch-notice" target="_blank">Project on Github</a>
                <a href="https://netlify.com" target="_blank">Hosted by Netlify</a>
            </span>
        </footer>

    </section>
</template>

<script>

import AppHeader from './../components/AppHeader.vue'

export default {
    name: 'App',
    components: { AppHeader },
    async beforeCreate(){
        let upcoming = await this.$axios.$get('https://api.spacexdata.com/v2/launches/upcoming');
        let past = await this.$axios.$get('https://api.spacexdata.com/v2/launches');

        this.$store.dispatch( 'save', { launches: upcoming, type: 'upcoming' });
        this.$store.dispatch( 'save', { launches: past.reverse(), type: 'past' });
    }
}
</script>