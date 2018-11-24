/**
 * This is the central store for the application.
 * all modules must be imported here.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

import { PLAYER_DATA_PROVIDER } from './modules/PlayerDataProvider.js';
import { TRANSACTION_MANAGER } from './modules/TransactionManager.js';

export const MAIN_STORE = function(vue, vuex)
{
    // Tell vue to use vuex.
    vue.use(vuex)

    // Return new main store object.
    return new vuex.Store({
        namespaced: true,
        modules: {
            playerDataProvider: PLAYER_DATA_PROVIDER,
            transactionManager: TRANSACTION_MANAGER
        }
    });
};