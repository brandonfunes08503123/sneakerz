class Api::SessionsController < ApplicationController

    #skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(params[:user][:email],
                                        params[:user][:password])
        
        if @user
            login(@user)
            render '/api/users/show'
        else
            render :json ['Invalid email or password']
        end
    end


    # redirect to homepage when logged out
    def destroy
        logout! if logged_in?
        #redirect_to root #splash page is root the splash page?
        render "api/users/show"
    end
end