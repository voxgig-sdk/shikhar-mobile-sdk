
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ShikharMobileSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ShikharMobileSDK.test()
    equal(testsdk instanceof ShikharMobileSDK, true,
      'ShikharMobileSDK.test() must return a client synchronously')
  })

})
