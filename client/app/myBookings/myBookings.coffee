'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'myBookings',
    url: '/myBookings'
    templateUrl: 'app/myBookings/myBookings.html'
    controller: 'MybookingsCtrl'
