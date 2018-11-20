/**
 * This is the central store for the application.
 * all modules must be imported here.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

import Vue from 'vue';
import Vuex from 'vuex';

import { PLAYER_DATA_PROVIDER } from './modules/PlayerDataProvider.js';

Vue.use(Vuex);

export const MAIN_STORE = new Vuex.Store({
    namespaced: true,
    modules: {
        playerDataProvider: PLAYER_DATA_PROVIDER
    }
});