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
                v => !!v || 'A starting balance is required',
                v => parseInt(v) > 0 || 'Starting balance must be a valid non-zero number'
            ]
        }
    },
    components: {
        aPlayerListItem: SetupWizardPlayerListItem
    },
    computed: {
        ...mapGetters({
            players: 'playerDataProvider/playersList'
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
