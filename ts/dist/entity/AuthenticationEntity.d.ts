import { ShikharMobileEntityBase } from '../ShikharMobileEntityBase';
import type { ShikharMobileSDK } from '../ShikharMobileSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationCreateData } from '../ShikharMobileTypes';
declare class AuthenticationEntity extends ShikharMobileEntityBase<Authentication> {
    constructor(client: ShikharMobileSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    create(this: any, reqdata?: AuthenticationCreateData, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
