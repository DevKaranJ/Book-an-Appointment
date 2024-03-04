Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
  resources :users, only: [:new, :create]


  root 'root#index'

end
