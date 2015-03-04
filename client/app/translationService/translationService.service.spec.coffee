'use strict'

describe 'Service: currencyService', ->

  # load the service's module
  beforeEach module 'galaMobileApp'

  # instantiate service
  currencyService = undefined
  beforeEach inject (_currencyService_) ->
    currencyService = _currencyService_

  it 'should do something', ->
    expect(!!currencyService).toBe true
