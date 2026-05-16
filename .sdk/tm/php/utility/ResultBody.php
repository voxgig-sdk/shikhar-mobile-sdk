<?php
declare(strict_types=1);

// ShikharMobile SDK utility: result_body

class ShikharMobileResultBody
{
    public static function call(ShikharMobileContext $ctx): ?ShikharMobileResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
