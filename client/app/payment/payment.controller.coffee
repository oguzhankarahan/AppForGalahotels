'use strict'

angular.module 'galaMobileApp'
.controller 'PaymentCtrl', ($scope, $http, socket, $stateParams, Auth, $location) ->
  $scope.payment = []
  $http.get("/api/payment/" + $stateParams.hid).success (result) ->
    $scope.payment = result
    return

  $scope.countries = []

  $http.get("/api/country").success (data) ->
    $scope.countries = data
    return
  $scope.buttonDisabled = false
  $scope.addReservation = (paymentForm) ->
    $scope.buttonDisabled = true
    $scope.paymentForm.details.name = $scope.getCurrentUser().name
    $scope.paymentForm.details.email = $scope.getCurrentUser().email
    $scope.paymentForm.hotel = {}
    $scope.paymentForm.hotel.hid = $scope.payment.hid
    $scope.paymentForm.hotel.sid = $scope.payment.sid


    return  if $scope.paymentForm.guest is "" & $scope.paymentForm.payment is "" & $scope.paymentForm.details is "" & $scope.paymentForm.hotel is ""
    $http.post "/api/payment",
      guest : $scope.paymentForm.guest
      payment : $scope.paymentForm.payment
      details : $scope.paymentForm.details
      hotel : $scope.paymentForm.hotel

    $scope.guest = ""
    $scope.payment = ""
    $scope.details = ""
    $scope.hotel = ""
  return