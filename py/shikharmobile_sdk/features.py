# ShikharMobile SDK feature factory

from shikharmobile_sdk.feature.base_feature import ShikharMobileBaseFeature
from shikharmobile_sdk.feature.ratelimit_feature import ShikharMobileRatelimitFeature
from shikharmobile_sdk.feature.retry_feature import ShikharMobileRetryFeature
from shikharmobile_sdk.feature.test_feature import ShikharMobileTestFeature
from shikharmobile_sdk.feature.timeout_feature import ShikharMobileTimeoutFeature


_FEATURES = {
    "base": lambda: ShikharMobileBaseFeature(),
    "ratelimit": lambda: ShikharMobileRatelimitFeature(),
    "retry": lambda: ShikharMobileRetryFeature(),
    "test": lambda: ShikharMobileTestFeature(),
    "timeout": lambda: ShikharMobileTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
