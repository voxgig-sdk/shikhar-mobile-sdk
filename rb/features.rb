# ShikharMobile SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ShikharMobileFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShikharMobileBaseFeature.new
    when "test"
      ShikharMobileTestFeature.new
    else
      ShikharMobileBaseFeature.new
    end
  end
end
