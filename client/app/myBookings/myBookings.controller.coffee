'use strict'

angular.module 'galaMobileApp'
.controller 'MybookingsCtrl', ($scope, $stateParams, $http) ->
  $scope.bookings = []
  $http.get("/api/bookings").success (data) ->
    $scope.bookings = data
    return