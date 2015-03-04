'use strict'

angular.module 'galaMobileApp'
.controller 'ResultCtrl', ($scope, $http, $filter) ->
  $scope.hotels = []

  $http.get("/api/hotels").success (data) ->
    $scope.hotels = data
    return



  $scope.orderBy = $filter("orderBy")
  $scope.order = (predicate, reverse) ->
    $scope.hotels = $scope.orderBy($scope.hotels, predicate, reverse)
    return


