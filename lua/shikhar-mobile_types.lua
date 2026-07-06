-- Typed models for the ShikharMobile SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Authentication
---@field message? string
---@field mobile string
---@field password string
---@field success? boolean
---@field token? string
---@field user? table
---@field verification_id? string

---@class AuthenticationCreateData
---@field message? string
---@field mobile string
---@field password string
---@field success? boolean
---@field token? string
---@field user? table
---@field verification_id? string

local M = {}

return M
