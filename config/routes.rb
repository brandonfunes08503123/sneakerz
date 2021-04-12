Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json} do
    
    resources :sneakers, only: [:index, :show] do 
      get "also_viewed", on: :member
      collection do 
        get "adidas_full_collection"
        get "yeezy_full_collection"
        get "sbs_full_collection"
        get "jordan_full_collection"
        get "adidas_front_page_collection"
        get "yeezy_front_page_collection"
        get "sbs_front_page_collection"
        get "jordan_front_page_collection"
      end
    end

    

    resources :users, only: [:new, :create, :destroy]
    
    resources :cart_products, only: [ :index, :create, :destroy]    
  
    resources :searches, only: [:index]
    resource :session, only: [:create, :destroy]
  
  end

end
