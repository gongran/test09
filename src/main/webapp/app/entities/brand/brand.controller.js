(function() {
    'use strict';

    angular
        .module('test09App')
        .controller('BrandController', BrandController);

    BrandController.$inject = ['Brand'];

    function BrandController(Brand) {

        var vm = this;

        vm.brands = [];

        loadAll();

        function loadAll() {
            Brand.query(function(result) {
                vm.brands = result;
                vm.searchQuery = null;
            });
        }
    }
})();
