# frozen_string_literal: true

# Typed models for the ShikharMobile SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Authentication entity data model.
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] mobile
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] verification_id
#   @return [String, nil]
Authentication = Struct.new(
  :message,
  :mobile,
  :password,
  :success,
  :token,
  :user,
  :verification_id,
  keyword_init: true
)

# Match filter for Authentication#create (any subset of Authentication fields).
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] mobile
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] verification_id
#   @return [String, nil]
AuthenticationCreateData = Struct.new(
  :message,
  :mobile,
  :password,
  :success,
  :token,
  :user,
  :verification_id,
  keyword_init: true
)

