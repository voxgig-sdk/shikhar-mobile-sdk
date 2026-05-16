
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ShikharMobileSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ShikharMobileSDK.test()
    equal(null !== testsdk, true)
  })

})
