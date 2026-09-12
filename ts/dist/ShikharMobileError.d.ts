import { Context } from './Context';
declare class ShikharMobileError extends Error {
    isShikharMobileError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ShikharMobileError };
