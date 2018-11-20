<template src="./SetupWizard.htm"></template>

<script>
/**
 * The set up wizard will walk the user
 * through setting up the application for use.
 * 
 * @author Tai Nguyen
 * @date 11/18/2018
 */

import SetupWelcome from './SetupWizardWelcome.vue';
import SetupAddPlayers from './SetupWizardAddPlayers.vue';
import SetupComplete from './SetupWizardComplete.vue';

export default {
    name: 'SetupWizard',
    data: function()
    {
        return {
            step: 1
        };
    },
    components:{
        aWelcomeStep: SetupWelcome,
        aAddPlayersStep: SetupAddPlayers,
        aCompleteStep: SetupComplete
    },
    methods: {
        completeSetup: function()
        {
            // Route players to the expense tracker.
        }
    }
};
</script>
