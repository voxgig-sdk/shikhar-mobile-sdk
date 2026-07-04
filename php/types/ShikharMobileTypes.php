<?php
declare(strict_types=1);

// Typed models for the ShikharMobile SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Authentication entity data model. */
class Authentication
{
    public ?string $message = null;
    public string $mobile;
    public string $password;
    public ?bool $success = null;
    public ?string $token = null;
    public ?array $user = null;
    public ?string $verification_id = null;
}

/** Match filter for Authentication#create (any subset of Authentication fields). */
class AuthenticationCreateData
{
    public ?string $message = null;
    public ?string $mobile = null;
    public ?string $password = null;
    public ?bool $success = null;
    public ?string $token = null;
    public ?array $user = null;
    public ?string $verification_id = null;
}

