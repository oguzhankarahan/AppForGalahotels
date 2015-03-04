'use strict'

angular.module 'galaMobileApp'
.controller 'myAccountMenuCtrl', ($scope, $location) ->
  $scope.isActive = (route) ->
    route is $location.path()
