'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'personalDetail',
    url: '/personalDetail'
    templateUrl: 'app/personalDetail/personalDetail.html'
    controller: 'PersonaldetailCtrl'
