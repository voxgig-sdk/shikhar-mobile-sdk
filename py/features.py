# ShikharMobile SDK feature factory

from feature.base_feature import ShikharMobileBaseFeature
from feature.test_feature import ShikharMobileTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ShikharMobileBaseFeature(),
        "test": lambda: ShikharMobileTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
