# ShikharMobile SDK utility: feature_add
module ShikharMobileUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
