app.controller('homeCtrl', ['$rootScope', '$stateParams', '$scope', '$http', 'SearchService', '$location',
    function ($rootScope, $stateParams, $scope, $http, SearchService, $location) {
        $scope.cities = SearchService.cities;

        $scope.search = function (inputValue) {
            if ($scope.cities.length > 0) {
                $scope.cities.length = 0;
                SearchService.cuisineTypes.length = 0;
                SearchService.newCitySearch(inputValue);
            } else {
                SearchService.newCitySearch(inputValue).then(function () {
                    $scope.SelectedCityName = [];
                    SearchService.LocalInfo = [];
                    SearchService.cuisineTypes = [];
                })
            }
        };

        $scope.citySelector = function (cityName, cityID) {
            SearchService.nameArray.push(cityName);
            SearchService.LocalInfo.push(cityID);
            SearchService.CityCuisine(cityID);
        };
    }
]);