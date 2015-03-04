'use strict'

angular.module 'galaMobileApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'payment',
    url: '/payment/:hid'
    templateUrl: 'app/payment/payment.html'
    controller: 'PaymentCtrl'
