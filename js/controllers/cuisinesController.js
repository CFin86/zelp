app.controller('cuisinesCtrl', ['$rootScope', '$scope', '$http', '$location', 'SearchService', '$stateParams',
    function ($rootScope, $scope, $http, $location, SearchService, $stateParams) {
        $('#app').removeClass('modal-open')
        $('div').removeClass('modal-backdrop fade show')

        $scope.cities = SearchService.cities;
        $scope.cuis = SearchService.cuisineTypes;
        $scope.SelectedCityName = SearchService.nameArray;
        $scope.info = SearchService.LocalInfo;

        if ($scope.cities[0] == null) {
            var cityIdNumber = parseInt($stateParams.city_id)
            $scope.info.push(cityIdNumber)
            SearchService.newCitySearch(cityIdNumber)
            SearchService.CityCuisine(cityIdNumber)
        };

        $scope.CuisineSelector = function (cuisineID) {
            $scope.info.push(cuisineID);
            SearchService.restaurants = [];
            if ($scope.info.length >= 4) {
                SearchService.RestSearch($scope.info[0], $scope.info[1], $scope.info[2], $scope.info[3]).then(function () {
                    $location.path($stateParams.city_id + '/restaurants')
                })
            }
        }
    }
]);