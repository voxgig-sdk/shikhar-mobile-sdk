"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AuthenticationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHIKHAR_MOBILE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHIKHAR_MOBILE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShikharMobileSDK.test();
        const ent = testsdk.Authentication();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.ShikharMobileSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Authentication().create({ "mobile": 1, "password": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHIKHAR_MOBILE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'authentication.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$STRING`", "key$": "message", "index$": 0 }, "mobile": { "a": true, "h": "Mobile", "n": "mobile", "r": true, "sh": "User's mobile number", "t": "`$STRING`", "key$": "mobile", "index$": 1 }, "password": { "a": true, "fo": "password", "h": "Password", "n": "password", "r": true, "sh": "User's password", "t": "`$STRING`", "key$": "password", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": false, "t": "`$BOOLEAN`", "key$": "success", "index$": 3 }, "token": { "a": true, "h": "Token", "n": "token", "r": false, "sh": "Authentication token", "t": "`$STRING`", "key$": "token", "index$": 4 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "t": "`$OBJECT`", "key$": "user", "index$": 5 }, "verificationId": { "a": true, "h": "Verification Id", "n": "verificationId", "r": false, "t": "`$STRING`", "key$": "verificationId", "index$": 6 } }, "name": "authentication", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["mobile", "password"], "co": { "id": "POST /api/auth/login", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/auth/login", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "auth" }, { "lit": "login" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["mobile"], "co": { "id": "POST /api/auth/verify-mobile", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/auth/verify-mobile", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "auth" }, { "lit": "verify-mobile" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "authentication", "name__orig": "authentication", "Name": "Authentication", "name_": "authentication", "name-": "authentication", "NAME": "AUTHENTICATION", "index$": 0 }, { "active": true, "entity": "authentication", "key$": "BasicAuthenticationFlow", "kind": "basic", "name": "BasicAuthenticationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "authentication_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Authentication', { "POST /api/auth/login": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["mobile", "password"], "properties": { "mobile": { "type": "string", "description": "User's mobile number", "example": "+911234567890", "key$": "mobile" }, "password": { "type": "string", "format": "password", "description": "User's password", "example": "SecurePassword123", "key$": "password" } }, "index$": 1 } } } }, "parameters": [] }, "POST /api/auth/verify-mobile": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["mobile"], "properties": { "mobile": { "type": "string", "description": "Mobile number to verify", "example": "+911234567890", "key$": "mobile" } }, "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const authentication_ref01_ent = client.Authentication();
        let authentication_ref01_data = setup.data.new.authentication['authentication_ref01'];
        authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data();
        (0, node_assert_1.default)(null != authentication_ref01_data);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShikharMobileSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['authentication01', 'authentication02', 'authentication03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SHIKHAR_MOBILE_TEST_AUTHENTICATION_ENTID': idmap,
        'SHIKHAR_MOBILE_TEST_LIVE': 'FALSE',
        'SHIKHAR_MOBILE_TEST_EXPLAIN': 'FALSE',
        'SHIKHAR_MOBILE_APIKEY': '',
    });
    idmap = env['SHIKHAR_MOBILE_TEST_AUTHENTICATION_ENTID'];
    const live = 'TRUE' === env.SHIKHAR_MOBILE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SHIKHAR_MOBILE_TEST_AUTHENTICATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ShikharMobileSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=AuthenticationEntity.test.js.map