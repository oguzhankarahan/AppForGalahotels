'use strict'

angular.module 'galaMobileApp'
  .controller 'MyfavoritesCtrl', ($scope, $http) ->
    $scope.favorites = []

    $http.get("/api/favorites").success (data) ->
      $scope.favorites = data
      return