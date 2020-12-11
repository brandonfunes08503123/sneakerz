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
       @user = current_user
       if @user
            logout
            render "api/users/show"
       else 
            render json: ["Nobody signed in"], status: 404
       end
        #redirect_to root #splash page is root the splash page?
        
    end
end