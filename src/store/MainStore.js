/**
 * This is the central store for the application.
 * all modules must be imported here.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

import Vue from 'vue';
import Vuex from 'vuex';

import { DASHBOARD_STATE_MANAGER } from './modules/DashboardStateManager.js';
import { PLAYER_DATA_PROVIDER } from './modules/PlayerDataProvider.js';
import { TRANSACTION_MANAGER } from './modules/TransactionManager.js';

Vue.use(Vuex);

export const MAIN_STORE = new Vuex.Store({
    namespaced: true,
    modules: {
        dashboardStateManager: DASHBOARD_STATE_MANAGER,
        playerDataProvider: PLAYER_DATA_PROVIDER,
        transactionManager: TRANSACTION_MANAGER
    }
});