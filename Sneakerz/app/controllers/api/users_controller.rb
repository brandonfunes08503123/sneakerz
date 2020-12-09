class Api::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    # render new page for creating a new user
    def new
        @user = User.new
        render new
    end

    def create
        @user = User.new(user_params);

        if @user.save
            login(@user)
            redirect_to user_url
        else
           render :json[@user.errors.full_messages]
        end
    end

    # a user should be able to delete
    # their profile
    def destroy
        @user.destroy
        redirect_to root # might be splash page
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password);
    end
end
