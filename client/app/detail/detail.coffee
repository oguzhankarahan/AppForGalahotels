'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'detail',
    url: '/detail/:hid'
    templateUrl: 'app/detail/detail.html'
    controller: 'HotelDetailCtrl'
