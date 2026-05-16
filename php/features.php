<?php
declare(strict_types=1);

// ShikharMobile SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ShikharMobileFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ShikharMobileBaseFeature();
            case "test":
                return new ShikharMobileTestFeature();
            default:
                return new ShikharMobileBaseFeature();
        }
    }
}
