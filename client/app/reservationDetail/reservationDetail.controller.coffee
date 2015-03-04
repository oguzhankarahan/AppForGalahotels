'use strict'

angular.module 'galaMobileApp'
.controller 'ReservationdetailCtrl', ($scope, $http, $stateParams) ->
  $scope.resDetail = []
  $scope.cancelButtonDisabled = false
  $scope.bookingButtonDisabled = false
  $http.get("/api/resDetail/" + $stateParams.bid).success (result) ->
    $scope.resDetail = result
    return
  $scope.cancelPendingReservation = (cancelPendingForm) ->
    $scope.cancelButtonDisabled = true
    $scope.cancelPendingForm.pendingCancel = {}
    $scope.cancelPendingForm.pendingCancel.bid = $scope.resDetail.bid


    return  if $scope.cancelPendingForm.pendingCancel is ""
    $http.post "/api/resDetail",
      pendingCancel : $scope.cancelPendingForm.pendingCancel

    $scope.pendingCancel = ""
    return

  $scope.cancelConfirmedReservation = (cancelConfirmedForm) ->
      $scope.cancelButtonDisabled = true
      $scope.cancelConfirmedForm.confirmedCancel = {}
      $scope.cancelConfirmedForm.confirmedCancel.bid = $scope.resDetail.bid


      return  if $scope.cancelConfirmedForm.confirmedCancel is ""
      $http.post "/api/resDetail",
        confirmedCancel : $scope.cancelConfirmedForm.confirmedCancel

      $scope.confirmedCancel = ""
      return


  $scope.addReservation = (pendingForm) ->
    $scope.bookingButtonDisabled = true
    $scope.pendingForm.hotel = {}
    $scope.pendingForm.hotel.hid = $scope.resDetail.hid
    $scope.pendingForm.hotel.sid = $scope.resDetail.sid


    return  if $scope.pendingForm.guest is "" & $scope.pendingForm.payment is "" & $scope.pendingForm.hotel is ""
    $http.post "/api/resDetail",
      guest : $scope.pendingForm.guest
      payment : $scope.pendingForm.payment
      hotel : $scope.pendingForm.hotel

    $scope.guest = ""
    $scope.payment = ""
    $scope.hotel = ""
  return