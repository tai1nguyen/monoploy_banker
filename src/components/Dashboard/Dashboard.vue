<template src="./Dashboard.htm"></template>

<script>
/**
 * This component handles displaying the current
 * standings of all players. Information displayed
 * include player expenses, incomes, and net profit.
 * 
 * @author Tai Nguyen
 * @date 11/20/2018
 */

import { mapGetters } from 'vuex';

import DashboardTransactionForm from './DashboardTransactionForm.vue';
import DashboardTransactionHistory from './DashboardTransactionHistory.vue';

export default {
    name: 'Dashboard',
    data: function()
    {
        return {
            isDialogOpen: false,
            headers: [
               {
                    text: 'Players',
                    align: 'left',
                    sortable: false,
                    value: 'name'
               },
               { text: 'Income', value: 'income' },
               { text: 'Expense', value: 'expense' },
               { text: 'Net Profit', value: 'netProfit'}
            ]
        };
    },
    components: {
        aTransactionForm: DashboardTransactionForm,
        aTransactionHistoryList: DashboardTransactionHistory
    },
    computed: {
        ...mapGetters({
            playerData: 'playerDataProvider/playersList'
        })
    }
};
</script>