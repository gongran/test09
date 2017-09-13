(function() {
    'use strict';

    angular
        .module('test09App')
        .controller('JobController', JobController);

    JobController.$inject = ['Job'];

    function JobController(Job) {

        var vm = this;

        vm.jobs = [];

        loadAll();

        function loadAll() {
            Job.query(function(result) {
                vm.jobs = result;
                vm.searchQuery = null;
            });
        }
    }
})();
