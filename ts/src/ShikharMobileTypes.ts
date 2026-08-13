// Typed models for the ShikharMobile SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Authentication {
  id?: string
  message?: string
  mobile?: string
  name?: string
  password: string
  success?: boolean
  verificationId?: string
}

export interface AuthenticationCreateData {
  id?: string
  message?: string
  mobile?: string
  name?: string
  password: string
  success?: boolean
  verificationId?: string
}

