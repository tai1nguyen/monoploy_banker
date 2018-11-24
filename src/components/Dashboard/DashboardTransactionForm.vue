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
            amount: null,
            reason: ''
        };
    },
    computed: {
        ...mapGetters({
            payerNames: 'playerDataProvider/playerNamesList'
        }),
        payeeNames: function()
        {
            var self = this;

            return _.reject(this.payerNames, function(name)
            {
                return name === self.payer;
            });
        },
        isDisabled: function()
        {
            // Returns true if any of the
            // transaction details are missing.
            return _.isEmpty(this.payer)
                || _.isEmpty(this.payee)
                || _.isEmpty(this.amount)
                || _.isEmpty(this.reason);
        }
    },
    methods: {
        ...mapActions({
            addTransaction: 'transactionManager/addTransaction'
        }),
        cancelTransaction: function()
        {
            this.clearEntries();
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

            // Clear saved transaction
            // details so users can
            // input a new transaction.
            this.clearEntries();
        },
        clearEntries: function()
        {
            // Reset input fields.
            this.payer = '';
            this.payee = '';
            this.amount = null;
            this.reason = '';
        }
    }
};
</script>