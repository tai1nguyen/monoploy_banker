/**
 * Creates the router to be used by the 
 * application. This is also were all routes are declared.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

// Import routes.
import { SETUP_WIZARD } from './routes/SetupWizard.js';

export const MAIN_ROUTER = function(vue, vueRouter)
{
    // Tell vue to use vue router.
    vue.use(vueRouter);

    // Merge all routes into a single collection.
    const ALL_ROUTES = _.flatten(
        [
            SETUP_WIZARD
        ]
    );

    // Return the main router object.
    return new vueRouter({
        // History mode allows users to use their 
        // browser's 'back' button to return to a
        // previous page.
        mode: 'history',
        routes: ALL_ROUTES
    });
};