
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ShikharMobile',
        slug: "shikhar-mobile",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://shikhar.hulcd.com",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      authentication: {
      },

    }
  }


  entity = {
    "authentication": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "type": "`$STRING`"
        },
        {
          "name": "mobile",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "User's mobile number",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "format": "password",
          "name": "password",
          "req": true,
          "short": "User's password",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "verificationId",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "authentication",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/auth/login",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "login"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.user`"
              },
              "parts": [
                "api",
                "auth",
                "login"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/auth/verify-mobile",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "verify-mobile"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "auth",
                "verify-mobile"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

