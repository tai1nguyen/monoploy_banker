<template>
    <v-app id="app">
        <a-main-view></a-main-view>
    </v-app>
</template>
<style></style>

<script>
import MainView from './components/MainView/MainView.vue';

export default {
    name: "app",
    data: function() {
        return {};
    },
    components:{
        aMainView: MainView
    },
    mounted: function()
    {
        // When the app loads
        // always show the set
        // up wizard.
        this.$router.push({ name: 'SETUP_WIZARD' });
    }
};
</script>