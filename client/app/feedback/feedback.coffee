'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'feedback',
    url: '/feedback'
    templateUrl: 'app/feedback/feedback.html'
    controller: 'FeedbackCtrl'
