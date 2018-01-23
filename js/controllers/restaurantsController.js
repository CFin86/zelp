app.controller('restaurantsCtrl', ['$rootScope', '$scope', '$http', '$location', '$stateParams', 'SearchService',
    function ($rootScope, $scope, $http, $location, $stateParams, SearchService) {
        $scope.SelectedCityName = SearchService.nameArray;
        $scope.rest = SearchService.restaurants;
        $scope.info = SearchService.LocalInfo;

        if ($scope.info.length === 0) {
            $scope.rest = SearchService.restaurantsByID;
            var cityIdNumber = parseInt($stateParams.city_id);
            SearchService.newCitySearch(cityIdNumber);
            SearchService.RestSearchByID(cityIdNumber);
        };
    }
]);