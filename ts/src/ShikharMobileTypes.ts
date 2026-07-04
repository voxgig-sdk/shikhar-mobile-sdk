// Typed models for the ShikharMobile SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Authentication {
  message?: string
  mobile: string
  password: string
  success?: boolean
  token?: string
  user?: Record<string, any>
  verification_id?: string
}

export type AuthenticationCreateData = Partial<Authentication>

