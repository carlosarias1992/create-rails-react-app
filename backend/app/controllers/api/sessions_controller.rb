# frozen_string_literal: true

module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(session_params[:username], session_params[:password])

      if @user && !logged_in?
        token = get_token(@user)
        render json: { username: @user.username, id: @user.id, jwt: token }
      elsif logged_in?
        render json: { errors: ['Already logged in'] }, status: 422
      else
        render json: { errors: ['Invalid username/password'] }, status: 422
      end
    end

    def auto_login
      if current_user
        render json: { username: @user.username, id: @user.id }
      else
        render json: { errors: ['Not logged in'] }, status: 404
      end
    end

    private

    def session_params
      params.require(:user).permit(:username, :password)
    end
  end
end
