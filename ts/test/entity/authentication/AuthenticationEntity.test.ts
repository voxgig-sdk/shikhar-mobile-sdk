

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"message","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"mobile","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"User's mobile number","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"password","name":"password","req":true,"short":"User's password","type":"`$STRING`","index$":4},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"verificationId","req":false,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/auth/login","json":"{\"operationId\":\"loginUser\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"mobile\":{\"description\":\"User's mobile number\",\"example\":\"+911234567890\",\"type\":\"string\"},\"password\":{\"description\":\"User's password\",\"example\":\"SecurePassword123\",\"format\":\"password\",\"type\":\"string\"}},\"required\":[\"mobile\",\"password\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"success\":{\"example\":true,\"type\":\"boolean\"},\"token\":{\"description\":\"Authentication token\",\"example\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\",\"type\":\"string\"},\"user\":{\"properties\":{\"id\":{\"example\":\"12345\",\"type\":\"string\"},\"mobile\":{\"example\":\"+911234567890\",\"type\":\"string\"},\"name\":{\"example\":\"John Doe\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful login\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"Missing required fields\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"Invalid mobile number or password\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Invalid credentials\"}},\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained from login endpoint\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/auth/login","segments":[{"lit":"api"},{"lit":"auth"},{"lit":"login"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.user`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/auth/verify-mobile","json":"{\"operationId\":\"verifyMobile\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"mobile\":{\"description\":\"Mobile number to verify\",\"example\":\"+911234567890\",\"type\":\"string\"}},\"required\":[\"mobile\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"Verification code sent to your mobile number\",\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"},\"verificationId\":{\"example\":\"ver_abc123xyz\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Verification code sent successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"Invalid mobile number format\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Invalid mobile number\"}},\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token obtained from login endpoint\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/auth/verify-mobile","segments":[{"lit":"api"},{"lit":"auth"},{"lit":"verify-mobile"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":0}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"authentication_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Authentication')
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
  
