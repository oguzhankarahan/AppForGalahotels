'use strict'

angular.module 'galaMobileApp'
.controller 'MemberrewardsCtrl', ($scope, $http) ->
  $scope.rewards = []

  $http.get("/api/rewards").success (data) ->
    $scope.rewards = data
    return