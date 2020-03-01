# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Entry
  class Application < Rails::Application
    if File.file?('/.dockerenv') == true
      host_ip = `/sbin/ip route|awk '/default/ { print $3 }'`.strip
      config.web_console.whitelisted_ips = host_ip
    end

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:3000', '127.0.0.1:3000'
        resource '*', headers: :any, methods: %i[get post options delete], credentials: true
      end
    end
  end
end
