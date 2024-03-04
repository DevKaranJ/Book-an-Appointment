Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Replace '*' with the specific origin you want to allow (e.g., 'http://127.0.0.1:3000')
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
