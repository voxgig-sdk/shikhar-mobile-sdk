# ShikharMobile SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ShikharMobileFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShikharMobileBaseFeature.new
    when "ratelimit"
      ShikharMobileRatelimitFeature.new
    when "retry"
      ShikharMobileRetryFeature.new
    when "test"
      ShikharMobileTestFeature.new
    when "timeout"
      ShikharMobileTimeoutFeature.new
    else
      ShikharMobileBaseFeature.new
    end
  end
end
