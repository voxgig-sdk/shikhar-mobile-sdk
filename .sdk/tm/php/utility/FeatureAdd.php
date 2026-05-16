<?php
declare(strict_types=1);

// ShikharMobile SDK utility: feature_add

class ShikharMobileFeatureAdd
{
    public static function call(ShikharMobileContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
