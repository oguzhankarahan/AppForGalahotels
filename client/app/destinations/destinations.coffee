'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'destinations',
    url: '/destinations'
    templateUrl: 'app/destinations/destinations.html'
    controller: 'DestinationsCtrl'
