<?php
declare(strict_types=1);

// ShikharMobile SDK utility: result_headers

class ShikharMobileResultHeaders
{
    public static function call(ShikharMobileContext $ctx): ?ShikharMobileResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
