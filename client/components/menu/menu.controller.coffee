'use strict'

angular.module 'galaMobileApp'
.controller 'MenuCtrl', ($scope, $location, Auth, $cookies) ->
  $scope.menu = [
    title: 'Home'
    link: '/'
  ]

  $scope.isLoggedIn = Auth.isLoggedIn
  #  $scope.isAdmin = Auth.isAdmin
  $scope.getCurrentUser = Auth.getCurrentUser

  $scope.logout = ->
    Auth.logout()
    $location.path '/login'

  $scope.isActive = (route) ->
    route is $location.path()

#  $cookies.validCurrency = $scope.resultForm.selectedCurrencies
#
#
#  $scope.resultForm.selectedCurrencies = $cookies.validCurrency