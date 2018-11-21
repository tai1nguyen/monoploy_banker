/**
 * This modules provides methods for manipulating the dashboard state.
 * 
 * @author Tai Nguyen
 * @date 11/20/2018
 */

export const DASHBOARD_STATE_MANAGER = {
    namespaced: true,
    state: {
        isTransactionFormOpen: false
    },
    mutations: {
        TOGGLE_TRANSACTION_FORM_STATE: (state) =>
        {
            // Toggle the transaction form state.
            state.isTransactionFormOpen = !state.isTransactionFormOpen;
        }
    },
    actions: {
        toggleTransactionForm: ({ commit }) =>
        {
            commit('TOGGLE_TRANSACTION_FORM_STATE');
        },
    },
    getters: {
        isTransactionFormOpen: (state) =>
        {
            return state.isTransactionFormOpen;
        }
    }
}