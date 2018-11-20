/**
 * Creates the router to be used by the 
 * application. This is also were all routes are declared.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import _ from 'underscore';

// Import routes.
import { SETUP_WIZARD } from './routes/SetupWizard.js';

// Merge all routes into a single collection.
const ALL_ROUTES = _.flatten(
    [
        SETUP_WIZARD
    ]
);

Vue.use(VueRouter);

export const MAIN_ROUTER = new VueRouter({
    // history mode allows users to use their 
    // browser's 'back' button to return to a
    // previous page.
    mode: 'history',
    routes: ALL_ROUTES
});