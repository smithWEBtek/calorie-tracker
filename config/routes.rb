Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#home'
  resources :users
  get '/login', to: 'sessions#new'
  resources :sessions, only: [:create]
  delete '/logout', to: 'sessions#destroy'
end
