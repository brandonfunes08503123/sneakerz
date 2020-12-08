class Api::SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        user = User.find_by_credentials(params[:user][:email],
                                        params[:user][:password])
        
        if user
            login(user)
            redirect_to users_url
        else
            flash[:errors] = ['Invalid email or password']
            render :new
        end
    end


    # redirect to homepage when logged out
    def destroy
        logout! if logged_in?
        redirect_to root #splash page is root the splash page?
    end
end