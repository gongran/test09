(function() {
    'use strict';

    angular
        .module('test09App')
        .controller('LocationController', LocationController);

    LocationController.$inject = ['Location'];

    function LocationController(Location) {

        var vm = this;

        vm.locations = [];

        loadAll();

        function loadAll() {
            Location.query(function(result) {
                vm.locations = result;
                vm.searchQuery = null;
            });
        }
    }
})();
