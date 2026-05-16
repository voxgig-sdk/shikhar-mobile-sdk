<?php
declare(strict_types=1);

// ShikharMobile SDK utility: prepare_body

class ShikharMobilePrepareBody
{
    public static function call(ShikharMobileContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
