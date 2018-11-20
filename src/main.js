import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';

import { MAIN_STORE } from './Store/MainStore.js';
import { MAIN_ROUTER } from './Router/MainRouter.js';

// Import material icons.
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Import vuetify css. Must be loaded
// last to avoid other css styles conflicting
// with default vuetify styles.
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
    el: '#app',
    store: MAIN_STORE,
    router: MAIN_ROUTER,
    render: h => h(App)
});
