# ShikharMobile SDK

Authenticate users and verify mobile numbers for the Shikhar mobile app

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Shikhar Mobile API

The Shikhar Mobile API powers the back-end interactions for the Shikhar mobile application, hosted at [shikhar.hulcd.com](https://shikhar.hulcd.com). It handles the account-side flows the app needs to onboard and identify users.

The documented surface area focuses on authentication tasks:

- User login
- Mobile number verification
- Related app-side identity actions

Further endpoint details, authentication schemes, and licence terms are not published on the public catalogue page; consult the upstream service if you need contractual guarantees or production access.

## Try it

**TypeScript**
```bash
npm install shikhar-mobile
```

**Python**
```bash
pip install shikhar-mobile-sdk
```

**PHP**
```bash
composer require voxgig/shikhar-mobile-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/shikhar-mobile-sdk/go
```

**Ruby**
```bash
gem install shikhar-mobile-sdk
```

**Lua**
```bash
luarocks install shikhar-mobile-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ShikharMobileSDK } from 'shikhar-mobile'

const client = new ShikharMobileSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o shikhar-mobile-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "shikhar-mobile": {
      "command": "/abs/path/to/shikhar-mobile-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Authentication** | Operations for logging users in and verifying their mobile numbers against the Shikhar app's account system. | `/api/auth/login` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from shikharmobile_sdk import ShikharMobileSDK

client = ShikharMobileSDK({})

```

### PHP

```php
<?php
require_once 'shikharmobile_sdk.php';

$client = new ShikharMobileSDK([]);

```

### Golang

```go
import sdk "github.com/voxgig-sdk/shikhar-mobile-sdk/go"

client := sdk.NewShikharMobileSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "ShikharMobile_sdk"

client = ShikharMobileSDK.new({})

```

### Lua

```lua
local sdk = require("shikhar-mobile_sdk")

local client = sdk.new({})

```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ShikharMobileSDK.test()
const result = await client.Authentication().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ShikharMobileSDK.test(None, None)
result, err = client.Authentication(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ShikharMobileSDK::test(null, null);
[$result, $err] = $client->Authentication(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Authentication(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ShikharMobileSDK.test(nil, nil)
result, err = client.Authentication(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Authentication(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Shikhar Mobile API

- Upstream: [https://shikhar.hulcd.com](https://shikhar.hulcd.com)
- API docs: [https://freepublicapis.com/shikhar-mobile-api](https://freepublicapis.com/shikhar-mobile-api)

---

Generated from the Shikhar Mobile API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
