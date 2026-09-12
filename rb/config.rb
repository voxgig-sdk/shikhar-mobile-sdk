# ShikharMobile SDK configuration

module ShikharMobileConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ShikharMobile",
        "slug" => "shikhar-mobile",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://shikhar.hulcd.com",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "authentication" => {},
        },
      },
      "entity" => {
        "authentication" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "type" => "`$STRING`",
            },
            {
              "name" => "mobile",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "User's mobile number",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "format" => "password",
              "name" => "password",
              "req" => true,
              "short" => "User's password",
              "type" => "`$STRING`",
            },
            {
              "name" => "success",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "verificationId",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "authentication",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/login",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "login",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.user`",
                  },
                  "parts" => [
                    "api",
                    "auth",
                    "login",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/verify-mobile",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "verify-mobile",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "auth",
                    "verify-mobile",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ShikharMobileFeatures.make_feature(name)
  end
end
