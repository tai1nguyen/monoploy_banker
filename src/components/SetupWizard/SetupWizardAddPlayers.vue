<template src="./SetupWizardAddPlayers.htm"></template>

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
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            startingBalance: 0,
            startingBalanceRules: [
                v => !!v || 'A starting balance is required',
                v => parseInt(v) > 0
                    || 'Starting balance must be a valid non-zero number'
            ]
        }
    },
    components: {
        aPlayerListItem: SetupWizardPlayerListItem
    },
    computed: {
        ...mapGetters({
            players: 'playerDataProvider/playerList'
        })
    },
    methods: {
        ...mapActions({
            addAPlayer: 'playerDataProvider/addPlayer'
        }),
        addPlayer: function()
        {
            // Only insert a player into our
            // state if the starting balance is valid.
            if(parseInt(this.startingBalance) > 0
                && this.name != '')
            {
                this.addAPlayer({
                    name: this.name,
                    startingBalance: parseInt(this.startingBalance)
                });
            }
        },
        startOver: function()
        {
            this.name = '';
            this.startingBalance = 0;
        }
    }
};
</script>

<style>
.SetupWizardPlayerList.scrollable {
    height: 300px;
    overflow: auto;
}
</style>