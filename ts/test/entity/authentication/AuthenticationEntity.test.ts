

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ShikharMobileSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AuthenticationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHIKHAR_MOBILE_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHIKHAR_MOBILE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShikharMobileSDK.test()
    const ent = testsdk.Authentication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHIKHAR_MOBILE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'authentication.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":1},"mobile":{"a":true,"h":"Mobile","n":"mobile","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"User's mobile number","t":"`$STRING`","key$":"mobile","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"password":{"a":true,"fo":"password","h":"Password","n":"password","r":true,"sh":"User's password","t":"`$STRING`","key$":"password","index$":4},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":5},"verificationId":{"a":true,"h":"Verification Id","n":"verificationId","r":false,"t":"`$STRING`","key$":"verificationId","index$":6}},"id":{"field":"id","name":"id"},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/auth/login","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/auth/login","q":{},"r":{},"s":[{"lit":"api"},{"lit":"auth"},{"lit":"login"}],"t":{"req":"`reqdata`","res":"`body.user`"},"index$":0},{"a":true,"co":{"id":"POST /api/auth/verify-mobile","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/auth/verify-mobile","q":{},"r":{},"s":[{"lit":"api"},{"lit":"auth"},{"lit":"verify-mobile"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":0}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"authentication_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Authentication', {"POST /api/auth/login":{"protocol":"http","operationId":"loginUser","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["mobile","password"],"properties":{"mobile":{"type":"string","description":"User's mobile number","example":"+911234567890","key$":"mobile"},"password":{"type":"string","format":"password","description":"User's password","example":"SecurePassword123","key$":"password"}},"index$":1}}}},"responses":{"200":{"description":"Successful login","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true},"token":{"type":"string","description":"Authentication token","example":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."},"user":{"type":"object","properties":{"id":{"type":"string","example":"12345","key$":"id"},"mobile":{"type":"string","example":"+911234567890","key$":"mobile"},"name":{"type":"string","example":"John Doe","key$":"name"}},"index$":0}}}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"message":{"type":"string","example":"Missing required fields"}}}}}},"401":{"description":"Invalid credentials","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"message":{"type":"string","example":"Invalid mobile number or password"}}}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT token obtained from login endpoint"}}},"POST /api/auth/verify-mobile":{"protocol":"http","operationId":"verifyMobile","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["mobile"],"properties":{"mobile":{"type":"string","description":"Mobile number to verify","example":"+911234567890","key$":"mobile"}},"index$":1}}}},"responses":{"200":{"description":"Verification code sent successfully","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true,"key$":"success"},"message":{"type":"string","example":"Verification code sent to your mobile number","key$":"message"},"verificationId":{"type":"string","example":"ver_abc123xyz","key$":"verificationId"}},"index$":0}}}},"400":{"description":"Invalid mobile number","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"message":{"type":"string","example":"Invalid mobile number format"}}}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT token obtained from login endpoint"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const authentication_ref01_ent = client.Authentication()
    let authentication_ref01_data = setup.data.new.authentication['authentication_ref01']

    authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data()
    assert(null != authentication_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ShikharMobileSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['authentication01','authentication02','authentication03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHIKHAR_MOBILE_TEST_AUTHENTICATION_ENTID': idmap,
    'SHIKHAR_MOBILE_TEST_LIVE': 'FALSE',
    'SHIKHAR_MOBILE_TEST_EXPLAIN': 'FALSE',
    'SHIKHAR_MOBILE_APIKEY': '',
  })

  idmap = env['SHIKHAR_MOBILE_TEST_AUTHENTICATION_ENTID']

  const live = 'TRUE' === env.SHIKHAR_MOBILE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHIKHAR_MOBILE_TEST_AUTHENTICATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ShikharMobileSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.SHIKHAR_MOBILE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SHIKHAR_MOBILE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
