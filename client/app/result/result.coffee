'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'result',
    url: '/result'
    templateUrl: 'app/result/result.html'
    controller: 'ResultCtrl'
