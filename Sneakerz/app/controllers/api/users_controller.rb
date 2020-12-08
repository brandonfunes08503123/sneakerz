class Api::UsersController < ApplicationController
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
            flash.now[:errors] = @user.errors.full_messages
            render :new
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
