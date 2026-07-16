<?php
declare(strict_types=1);

// ShikharMobile SDK base feature

class ShikharMobileBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ShikharMobileContext $ctx, array $options): void {}
    public function PostConstruct(ShikharMobileContext $ctx): void {}
    public function PostConstructEntity(ShikharMobileContext $ctx): void {}
    public function SetData(ShikharMobileContext $ctx): void {}
    public function GetData(ShikharMobileContext $ctx): void {}
    public function GetMatch(ShikharMobileContext $ctx): void {}
    public function SetMatch(ShikharMobileContext $ctx): void {}
    public function PrePoint(ShikharMobileContext $ctx): void {}
    public function PreSpec(ShikharMobileContext $ctx): void {}
    public function PreRequest(ShikharMobileContext $ctx): void {}
    public function PreResponse(ShikharMobileContext $ctx): void {}
    public function PreResult(ShikharMobileContext $ctx): void {}
    public function PreDone(ShikharMobileContext $ctx): void {}
    public function PreUnexpected(ShikharMobileContext $ctx): void {}
}
