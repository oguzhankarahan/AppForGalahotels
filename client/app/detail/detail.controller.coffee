'use strict'

angular.module 'galaMobileApp'
.controller 'HotelDetailCtrl', ($scope, $http, $stateParams) ->
  $scope.hotel = []
  $scope.selectedHotel = $stateParams.hid-1
  $http.get("/api/detail/" + $stateParams.hid).success (result) ->
    $scope.hotel = result
    return