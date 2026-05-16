<?php
declare(strict_types=1);

// ShikharMobile SDK exists test

require_once __DIR__ . '/../shikharmobile_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ShikharMobileSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
