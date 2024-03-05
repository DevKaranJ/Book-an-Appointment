Rails.application.routes.draw do
  root 'root#index'

  devise_for :users, controllers: { registrations: 'users/registrations' }

  namespace :api do
    resources :users, only: [:show]
  end

  get '*path', to: 'root#index'
end
