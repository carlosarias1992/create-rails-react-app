# frozen_string_literal: true

module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(session_params[:username], session_params[:password])

      if @user && !logged_in?
        login(@user)
        render :show
      elsif logged_in?
        render json: { errors: ['Already logged in'] }, status: 422
      else
        render json: { errors: ['Invalid username/password'] }, status: 422
      end
    end

    def destroy
      if session[:session_token]
        logout
        render json: {}
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
