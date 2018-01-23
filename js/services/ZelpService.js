angular.module('ZelpServices', [])
    .service('SearchService', ['$rootScope', '$http', function ($rootScope, $http) {
        $http.defaults.headers.common['user-key'] = $rootScope.key;
        var zomatoAPI = 'https://developers.zomato.com/api/v2.1/';
        var $ctrl = this;

        $ctrl.cities = [];
        $ctrl.nameArray = [];
        $ctrl.cuisineTypes = [];
        $ctrl.restaurants = [];
        $ctrl.LocalInfo = [];
        $ctrl.restaurantsByID = [];

        $ctrl.newCitySearch = function (city) {
            if (typeof city === "number") {
                return $http.get(zomatoAPI + 'cities?city_ids=' + city).then(function (success) {
                    $ctrl.nameArray.unshift(success.data.location_suggestions[0].name);
                })
            } else {
                return $http.get(zomatoAPI + 'cities?q=' + city).then(function (success) {
                    for (var i = 0; i < success.data.location_suggestions.length; i++) {
                        $ctrl.cities.push(success.data.location_suggestions[i]);
                    }
                })
            }
        }

        $ctrl.CityCuisine = function ($stateParams) {
            return $http.get(zomatoAPI + 'cuisines?city_id=' + $stateParams).then(function (success) {
                for (var i = 0; i < success.data.cuisines.length; i++) {
                    $ctrl.cuisineTypes.push(success.data.cuisines[i].cuisine);
                }
            })
        }

        $ctrl.RestSearch = function (cityID, choice1, choice2, choice3) {
            return $http.get(zomatoAPI + 'search?entity_id=' + cityID + '&entity_type=city&cuisines=' +
                choice1 + '%2C' + choice2 + '%2C' + choice3 + '&sort=rating&order=desc').then(function (success) {
                for (var i = 0; i < success.data.restaurants.length; i++) {
                    $ctrl.restaurants.push(success.data.restaurants[i].restaurant)
                }
            })
        }

        $ctrl.RestSearchByID = function (cityID) {
            return $http.get(zomatoAPI + 'search?entity_id=' + cityID + '&entity_type=city&sort=rating&order=desc').then(function (success) {
                for (var i = 0; i < success.data.restaurants.length; i++) {
                    $ctrl.restaurantsByID.push(success.data.restaurants[i].restaurant)
                }
            })
        }
    }])