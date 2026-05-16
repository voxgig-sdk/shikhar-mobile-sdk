
import { Context } from './Context'


class ShikharMobileError extends Error {

  isShikharMobileError = true

  sdk = 'ShikharMobile'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ShikharMobileError
}

