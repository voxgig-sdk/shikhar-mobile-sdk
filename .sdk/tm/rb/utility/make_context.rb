# ShikharMobile SDK utility: make_context
require_relative '../core/context'
module ShikharMobileUtilities
  MakeContext = ->(ctxmap, basectx) {
    ShikharMobileContext.new(ctxmap, basectx)
  }
end
