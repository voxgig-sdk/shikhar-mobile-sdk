# ShikharMobile SDK utility: prepare_body
require_relative 'media'
module ShikharMobileUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ShikharMobileUtilities.raw_body(ctx.reqdata) if ShikharMobileUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
