/**
 * Defines the routes for application.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

import SetupWizard from '../../components/SetupWizard/SetupWizard.vue';

export const SETUP_WIZARD = [
    {
        path: '',
        name: 'SETUP_WIZARD',
        components: {
            MainViewContent: SetupWizard
        }
    }
];