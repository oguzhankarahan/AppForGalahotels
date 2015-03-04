'use strict'

angular.module 'galaMobileApp'
.controller 'FeedbackCtrl', ($scope, $http) ->
  $scope.feedbacks = []

  $http.get("/api/feedback").success (data) ->
    $scope.feedbacks = data
    return