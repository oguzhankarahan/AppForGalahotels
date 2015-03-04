'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider.state 'reservationDetail',
    url: '/reservationDetail/:bid'
    templateUrl: 'app/reservationDetail/reservationDetail.html'
    controller: 'ReservationdetailCtrl'
