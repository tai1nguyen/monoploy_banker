/**
 * Defines the routes for application.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

import Dashboard from '../../components/Dashboard/Dashboard.vue';
import SetupWizard from '../../components/SetupWizard/SetupWizard.vue';

export const SETUP_WIZARD = [
    {
        path: 'welcome',
        name: 'SETUP_WIZARD',
        components: { MainViewContent: SetupWizard }
    },
    {
        path: 'dashboard',
        name: 'DASHBOARD',
        components: { MainViewContent: Dashboard }
    }
];