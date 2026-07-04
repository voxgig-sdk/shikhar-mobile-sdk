# Typed models for the ShikharMobile SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Authentication:
    mobile: str
    password: str
    message: Optional[str] = None
    success: Optional[bool] = None
    token: Optional[str] = None
    user: Optional[dict] = None
    verification_id: Optional[str] = None


@dataclass
class AuthenticationCreateData:
    message: Optional[str] = None
    mobile: Optional[str] = None
    password: Optional[str] = None
    success: Optional[bool] = None
    token: Optional[str] = None
    user: Optional[dict] = None
    verification_id: Optional[str] = None

