app.controller('navBarCtrl', ['$rootScope', '$scope', '$http', '$location', 'SearchService', '$stateParams',
    function ($rootScope, $scope, $http, $location, SearchService, $stateParams) {
        $scope.home = function () {
            SearchService.LocalInfo = [];
            $location.path('/');
        }

    }]);