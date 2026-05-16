package = "voxgig-sdk-shikhar-mobile"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/shikhar-mobile-sdk.git"
}
description = {
  summary = "ShikharMobile SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["shikhar-mobile_sdk"] = "shikhar-mobile_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
