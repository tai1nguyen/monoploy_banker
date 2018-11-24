/**
 * This module handles providing methods for
 * retrieving and manipulating data on
 * current players.
 * 
 * @author Tai Nguyen
 * @date 11/21/2018
 */

export const PLAYER_DATA_PROVIDER = {
    namespaced: true,
    state: {
        playersList: []
    },
    mutations: {
        ADD_PLAYER: (state, playerData) =>
        {
            var player = {};

            player.id = _.uniqueId();
            player.name = playerData.name;
            player.startingBalance = playerData.startingBalance;

            // Set intial player account balance.
            // Initial net profit is always the starting balance.
            player.netProfit = playerData.startingBalance;
            player.expense = 0;
            player.income = 0;

            state.playersList.push(player);
        },
        REMOVE_PLAYER: (state, id) =>
        {
            // Loop through the players array and
            // remove the frist player with the
            // provided id.
            state.playersList = _.reject(state.playersList, function(player)
            {
                return player.id === id;
            });
        },
        ADD_PLAYER_EXPENSE: (state, transaction) =>
        {
            // Find the player and update their expense.
            _.each(state.playersList, function(player)
            {
                if(player.name === transaction.playerName)
                {
                    // Update the player's
                    // expense and net profit.
                    player.expense = parseInt(player.expense) + parseInt(transaction.expense);
                    player.netProfit = parseInt(player.netProfit) - parseInt(transaction.expense);

                    // Stop searching.
                    return;
                }
            });
        },
        ADD_PLAYER_INCOME: (state, transaction) =>
        {
            // Find the player and update their income.
            _.each(state.playersList, function(player)
            {
                if(player.name === transaction.playerName)
                {
                    // Update the player's
                    // income and net profit.
                    player.income = parseInt(player.income) + parseInt(transaction.income);
                    player.netProfit = parseInt(player.netProfit) + parseInt(transaction.income);

                    //Stop searching.
                    return;
                }
            });
        }
    },
    actions: {
        addPlayer: ({ commit }, playerData) =>
        {
            commit('ADD_PLAYER', playerData);
        },
        removePlayer: ({ commit }, playerId) =>
        {
            commit('REMOVE_PLAYER', playerId);
        },
        addPlayerExpense: ({ commit }, { expense, playerName }) =>
        {
            commit('ADD_PLAYER_EXPENSE', { expense, playerName });
        },
        addPlayerIncome: ({ commit }, { income, playerName }) =>
        {
            commit('ADD_PLAYER_INCOME', { income, playerName });
        }
    },
    getters: {
        playersList: (state) =>
        {
            return state.playersList;
        },
        playerNamesList: (state) =>
        {
            // The bank is a valid player
            // for transaction purposes.
            var names = [ 'Bank' ];
            
            // Create an array of with all player names.
            _.map(state.playersList, function(player)
            {
                names.push(player.name);
            });

            return names;
        }
    }
};