<template src="./SetupWizardAddPlayers.htm"></template>
<style src="./SetupWizardAddPlayers.css"></style>
<script>
/**
 * This step allows users to add player to their game.
 * 
 * @author Tai Nguyen
 * @date 11/18/2018
 */

import { mapActions, mapGetters } from 'vuex';

import SetupWizardPlayerListItem from './SetupWizardPlayerListItem.vue';

export default {
    name: 'SetupWizardAddPlayers',
    data: function() {
        return {
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Name is required'
            ],
            startingBalance: 0,
            startingBalanceRules: [
                v => !!v || 'A starting balance is required'
            ],
            startingBalanceOptions: [
                500,
                1000,
                1500,
                2000,
                2500
            ]
        }
    },
    components: {
        aPlayerListItem: SetupWizardPlayerListItem
    },
    computed: {
        ...mapGetters({
            players: 'playerDataProvider/playersList'
        }),
        isDisabled: function()
        {
            // Disable the add player button if
            // user has not entered a starting balance
            // or name or the player has not yet been
            // added.
            return (!this.startingBalance
                || _.isEmpty(this.name)
                || this.isAlreadyAdded(this.name))
                ? true
                : false;
        }
    },
    methods: {
        ...mapActions({
            addAPlayer: 'playerDataProvider/addPlayer'
        }),
        isAlreadyAdded: function(name)
        {
            var self = this;

            // Loop through the list of players and
            // find the player with the same name as
            // the person the user is adding. If a
            // match if found that means the payer
            // has already been added.
            var isAlreadyAdded = _.find(self.players, function(player)
            {
                return player.name.toUpperCase() === self.name.toUpperCase();
            });

            return isAlreadyAdded;
        },
        addPlayer: function()
        {
            // Commit the player object
            // to the state object.
            this.addAPlayer({
                name: this.name,
                startingBalance: parseInt(this.startingBalance)
            });

            // Reset player name so
            // user can just type a
            // new one.
            this.name = '';
        },
        startOver: function()
        {
            this.name = '';
            this.startingBalance = 0;
        }
    }
};
</script>
