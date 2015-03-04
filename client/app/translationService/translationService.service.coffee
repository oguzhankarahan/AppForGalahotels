'use strict'

angular.module 'galaMobileApp'
.service 'currencyService', ($rootScope, $http) ->
  $rootScope.galaCurrencies = []

  $http.get("/api/galaCurrency").success (data) ->
    $rootScope.galaCurrencies = data
    return
