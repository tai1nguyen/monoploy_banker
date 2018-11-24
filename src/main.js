import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Vuetify from 'vuetify';
import _ from 'underscore';

import { UTILITIES } from './utils.js';
import { MAIN_STORE } from './Store/MainStore.js';
import { MAIN_ROUTER } from './Router/MainRouter.js';

// Import material icons.
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Import vuetify css. Must be loaded
// last to avoid other css styles conflicting
// with default vuetify styles.
import 'vuetify/dist/vuetify.min.css';

// Tell vue to use vuetify.
Vue.use(Vuetify);

// Add utilty objects to the global window instance.
// TODO find a better way to implement this.
window._ = _;
window.utils = UTILITIES;

new Vue({
    el: '#app',
    store: MAIN_STORE(Vue, Vuex),
    router: MAIN_ROUTER(Vue, VueRouter),
    render: h => h(App)
});
