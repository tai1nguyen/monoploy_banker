
import _ from 'underscore';

export const PLAYER_DATA_PROVIDER = {
    namespaced: true,
    state: {
        players: []
    },
    mutations: {
        ADD_PLAYER: (state, playerData) =>
        {
            var player = {};

            player.id = _.uniqueId();
            player.name = playerData.name;
            player.startingBalance = playerData.startingBalance;
            player.currentBalance = playerData.startingBalance;

            state.players.push(player);
        },
        REMOVE_PLAYER: (state, id) =>
        {
            // Loop through the players array and
            // remove the frist player with the
            // provided id.
            state.players = _.reject(state.players, function(player)
            {
                return player.id === id;
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
        }
    },
    getters: {
        playerList: (state) =>
        {
            return state.players;
        }
    }
};