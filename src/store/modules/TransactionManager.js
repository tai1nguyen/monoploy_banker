/**
 * This module manages adding transaction
 * and calculating each players total expenses,
 * incomes and net profits.
 * 
 * @author Tai Nguyen
 * @date 11/20/2018
 */

export const TRANSACTION_MANAGER = {
    namespaced: true,
    state: {
        history: []
    },
    mutations: {
        ADD_TRANSACTION_TO_HISTORY: (state, data) =>
        {
            var historyItem = {
                date: new Date().now(),
                message: '[' + data.payer + ']'
                    + ' paid '
                    + '[' + data.payee + ']'
                    + ' '
                    + '[$' + parseInt(data.amount) + ']'
                    + ' for '
                    + '[' + data.reason + ']'
            };

            state.history.push(historyItem);
        }
    },
    actions: {
        addTransaction: ({ dispatch, commit }, transaction) =>
        {
            var expense = {
                playerName: transaction.payer,
                expense: transaction.amount
            };

            var income = {
                playerName: transaction.payee,
                income: transaction.amount
            };

            // Add the expense and income from
            // the transaction to the appropriate
            // players. Add the transaction to the
            // history.
            dispatch('playerDataProvider/addPlayerExpense', expense, { root: 'true' });
            dispatch('playerDataProvider/addPlayerIncome', income, { root: 'true' });
            commit('ADD_TRANSACTION_TO_HISTORY', transaction);
        }
    },
    getters: {
        transactionHistory: (state) =>
        {
            // Because items are pushed into the array,
            // this getter will return the transaction
            // history in reverse so that new transactions
            // will appear at the top of the 
            return _.chain(state.history)
                .reverse()
                .value();
        }
    }
};