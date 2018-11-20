<template src="./MainView.htm"></template>
<style></style>

<script>
/**
 * Main content container for the application.
 * 
 * @author Tai Nguyen
 * @date 6/23/2018
 */

export default {
    name: 'MainView',
    data: function()
    {
        return {
            isOpen: false
        };
    },
    methods: {
        routeTo: function(pathName)
        {
            var path = {
                name: pathName
            };
            
            this.$router.push(path);
        }
    }
};
</script>