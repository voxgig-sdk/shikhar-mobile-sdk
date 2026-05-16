-- ProjectName SDK exists test

local sdk = require("shikhar-mobile_sdk")

describe("ShikharMobileSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
