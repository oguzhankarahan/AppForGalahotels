'use strict'

angular.module 'galaMobileApp'
.controller 'DestinationsCtrl', ($scope, $http) ->
  $scope.destinations = []

  $http.get("/api/destination").success (data) ->
    $scope.destinations = data
    return

