# ShikharMobile SDK exists test

require "minitest/autorun"
require_relative "../ShikharMobile_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ShikharMobileSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
