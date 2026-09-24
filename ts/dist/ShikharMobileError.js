"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShikharMobileError = void 0;
class ShikharMobileError extends Error {
    isShikharMobileError = true;
    sdk = 'ShikharMobile';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ShikharMobileError = ShikharMobileError;
//# sourceMappingURL=ShikharMobileError.js.map