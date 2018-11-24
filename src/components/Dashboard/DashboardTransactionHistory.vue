<template src="./DashboardTransactionHistory.htm"></template>
<style src="./DashboardTransactionHistory.css"></style>
<script>
/**
 * This component lists all transactions that have occured during gameplay.
 * 
 * @author Tai Nguyen
 * @date 11/20/2018
 */

import { mapGetters } from 'vuex';

export default {
    name: 'DashboardTransactionHistory',
    data: function() { return {}; },
    computed: {
        ...mapGetters({
            transactionHistory: 'transactionManager/transactionHistory'
        })
    }
};
</script>
