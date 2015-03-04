'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'myFavorites',
    url: '/myFavorites'
    templateUrl: 'app/myFavorites/myFavorites.html'
    controller: 'MyfavoritesCtrl'
