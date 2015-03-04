'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'memberRewards',
    url: '/memberRewards'
    templateUrl: 'app/memberRewards/memberRewards.html'
    controller: 'MemberrewardsCtrl'
