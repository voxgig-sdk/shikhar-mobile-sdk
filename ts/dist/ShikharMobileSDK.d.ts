import { AuthenticationEntity } from './entity/AuthenticationEntity';
export type * from './ShikharMobileTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ShikharMobileEntityBase } from './ShikharMobileEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class ShikharMobileSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Authentication(entopts?: Record<string, any>): AuthenticationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ShikharMobileSDK;
    tester(testopts?: any, sdkopts?: any): ShikharMobileSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ShikharMobileSDK;
export { stdutil, config, BaseFeature, ShikharMobileEntityBase, ShikharMobileSDK, SDK, };
export type { DirectResult };
