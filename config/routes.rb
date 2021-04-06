Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json} do
    
    resources :sneakers, only: [:index, :show] do 
      member do 
        get "also_viewed"
      end
    end



    resources :users, only: [:new, :create, :destroy]
    
    resources :cart_products, only: [ :index, :create, :destroy]    
  
    resources :searches, only: [:index]
    resource :session, only: [:create, :destroy]
  
  end

end
