<?php
declare(strict_types=1);

// ShikharMobile SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ShikharMobileMakeContext
{
    public static function call(array $ctxmap, ?ShikharMobileContext $basectx): ShikharMobileContext
    {
        return new ShikharMobileContext($ctxmap, $basectx);
    }
}
