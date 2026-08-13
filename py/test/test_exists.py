# ShikharMobile SDK exists test

import pytest
from shikharmobile_sdk import ShikharMobileSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ShikharMobileSDK.test(None, None)
        assert testsdk is not None
