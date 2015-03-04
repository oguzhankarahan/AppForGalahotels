'use strict'

angular.module 'galaMobileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mgcrea.ngStrap',
  'btford.socket-io',
  'ui.router',
  'pascalprecht.translate'
]
.config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
  $urlRouterProvider
  .otherwise '/'

  $locationProvider.html5Mode true
  $httpProvider.interceptors.push 'authInterceptor'
.config ($translateProvider) ->

  $translateProvider.useStaticFilesLoader
    prefix: "../app/translate/translation_"
    suffix: ".json"

  $translateProvider.preferredLanguage "en-US"
  $translateProvider.useCookieStorage()
  $translateProvider.storageKey "languageKey"

.controller 'TranslateCtrl', ($scope, $translate, $cookies) ->
    $scope.switchLanguage = (languageKey) ->
      $translate.use languageKey
      return

    $scope.switchLanguage()

.factory 'authInterceptor', ($rootScope, $q, $cookieStore, $location) ->

  # Add authorization token to headers
  request: (config) ->
    config.headers = config.headers or {}
    config.headers.Authorization = 'Bearer ' + $cookieStore.get 'token' if $cookieStore.get 'token'
    config

  # Intercept 401s and redirect you to login

.run ($rootScope, $location, Auth, $window, currencyService) ->
  $rootScope.isLoggedIn = Auth.isLoggedIn
  $rootScope.getCurrentUser = Auth.getCurrentUser

  $rootScope.logout = ->
    Auth.logout()
    $location.path '/login'

  $rootScope.isActive = (route) ->
    route is $location.path()
  # Redirect to login if route requires auth and you're not logged in
  $rootScope.$on '$stateChangeStart', (event, next) ->
    Auth.isLoggedInAsync (loggedIn) ->
      $location.path "/login" if next.authenticate and not loggedIn

  $rootScope.back = ->
    $window.history.back()
    return

  $rootScope.go = (path) ->
    $location.url path
    return

#
#.controller 'CurrencyCtrl', ($scope, $cookies) ->
#  $scope.currency = ->
#    $cookies.curr = $scope.selectedCurrency
#    return
#
#  #Init
#  $cookies.curr = "USD"  unless $cookies.curr
#
#  $scope.selectedCurrency = $cookies.curr
#  $scope.currency()



.directive "currencyDisplay", [
  "translationService"
  (selectedCurrencies) ->
    return (
      restrict: "A"
      scope:
        amount: "=currencyDisplay"

      template: "<span>{{ selectedCurrencies.name }} {{ (amount*selectedCurrencies.value) | number:1 }}</span>"
      replace: true
      link: (scope, element, attrs) ->
        scope.selectedCurrencies = selectedCurrencies
        return
    )
]


#.service 'translationService', ($rootScope, $http, $cookies) ->
#  $rootScope.galaCurrencies = []
#
#  $http.get("/api/galaCurrency").success (data) ->
#    $rootScope.galaCurrencies = data
#    return


#  $rootScope.translate = ->
#    $cookies.lang = $rootScope.selectedLanguage
#    translationService.getTranslation $rootScope, $rootScope.selectedLanguage
#    return
#
#  #Init
#  $cookies.lang = "tr"  unless $cookies.lang
#
#  $rootScope.selectedLanguage = $cookies.lang
#  $rootScope.translate()

#.controller 'GeneralController', ($scope, translationService, $cookies) ->
#
#  $scope.translate = ->
#    $cookies.lang = $scope.selectedLanguage
#    translationService.getTranslation $scope, $scope.selectedLanguage
#    return
#
#  #Init
#  $cookies.lang = "tr"  unless $cookies.lang
#
#  $scope.selectedLanguage = $cookies.lang
#  $scope.translate()