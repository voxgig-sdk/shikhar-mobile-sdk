# ShikharMobile SDK utility: make_context

from projectname_sdk.core.context import ShikharMobileContext


def make_context_util(ctxmap, basectx):
    return ShikharMobileContext(ctxmap, basectx)
