-- ShikharMobile SDK error

local ShikharMobileError = {}
ShikharMobileError.__index = ShikharMobileError


function ShikharMobileError.new(code, msg, ctx)
  local self = setmetatable({}, ShikharMobileError)
  self.is_sdk_error = true
  self.sdk = "ShikharMobile"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ShikharMobileError:error()
  return self.msg
end


function ShikharMobileError:__tostring()
  return self.msg
end


return ShikharMobileError
