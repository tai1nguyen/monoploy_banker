<template src="./SetupWizardPlayerListItem.htm"></template>

<script>
/**
 * This is the list view for all players
 * that have been added to the game during
 * the initial set up process.
 * 
 * @author Tai Nguyen
 * @date 11/19/2018
 */

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'SetupWizardPlayerListItem',
    data: function() { return {} },
    props: [ 'player' ],
    methods: {
        ...mapActions({
            removePlayer: 'playerDataProvider/removePlayer'
        }),
        removeSelectedPlayer: function(id)
        {
            this.removePlayer(id);
        }
    }
};
</script>
