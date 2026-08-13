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
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] mobile
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] verificationId
#   @return [String, nil]
Authentication = Struct.new(
  :id,
  :message,
  :mobile,
  :name,
  :password,
  :success,
  :verificationId,
  keyword_init: true
)

# Request payload for Authentication#create.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] mobile
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] verificationId
#   @return [String, nil]
AuthenticationCreateData = Struct.new(
  :id,
  :message,
  :mobile,
  :name,
  :password,
  :success,
  :verificationId,
  keyword_init: true
)

