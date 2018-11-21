<template src="./DashboardTransactionForm.htm"></template>

<script>
/**
 * This component allows users to add transactions.
 * 
 * @author Tai Nguyen
 * @date 11/20/2018
 */

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'DashboardTransactionForm',
    data: function()
    {
        return {
            payer: '',
            payee: '',
            amount: 0,
            reason: ''
        };
    },
    computed: {
        ...mapGetters({
            isDialogOpen: 'dashboardStateManager/isTransactionFormOpen',
            payerNames: 'playerDataProvider/playerNamesList'
        }),
        payeeNames: function()
        {
            var self = this;

            return _.reject(this.payerNames, function(name)
            {
                return name === self.payer;
            });
        }
    },
    methods: {
        ...mapActions({
            toggleDialog: 'dashboardStateManager/toggleTransactionForm',
            addTransaction: 'transactionManager/addTransaction'
        }),
        cancelTransaction: function()
        {
            this.clearEntries();

            // Calling this action should
            // only ever toggle the modal off.
            this.toggleDialog();
        },
        saveTransaction: function()
        {
            // Save the transaction.
            this.addTransaction(
                {
                    payer: this.payer,
                    payee: this.payee,
                    amount: this.amount,
                    reason: this.reason
                }
            );

            // Calling this action should
            // only ever toggle the modal off.
            this.toggleDialog();
        },
        clearEntries: function()
        {
            // Reset input fields.
            this.payer = '';
            this.payee = '';
            this.amount = 0;
            this.reason = '';
        }
    }
}
</script>